// ================= MOBILE DETECTION =================
const isMobile = () => window.innerWidth < 768 || /iPhone|iPad|Android/i.test(navigator.userAgent)
const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1024

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

// ================= BURGER MENU =================
const burgerMenu = document.getElementById("burgerMenu")
const mobileMenu = document.getElementById("mobileMenu")

if (burgerMenu && mobileMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("active")
      mobileMenu.classList.remove("active")
    })
  })

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".burger-menu") && !e.target.closest(".mobile-menu")) {
      burgerMenu.classList.remove("active")
      mobileMenu.classList.remove("active")
    }
  })
}

// ================= 3D CANVAS SETUP (Optimized for Mobile) =================
const canvas = document.getElementById("canvas3d")
if (canvas) {
  if (isMobile()) {
    canvas.style.display = "none"
    canvas.parentElement.innerHTML =
      '<div style="height: 200px; display: flex; align-items: center; justify-content: center; color: #9be2ff; font-size: 0.9rem;">Interactive 3D Preview</div>'
  } else {
    const ctx = canvas.getContext("2d")

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    // ================= 3D OBJECT CLASS =================
    class Point3D {
      constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
      }

      rotate(angleX, angleY) {
        const y = this.y * Math.cos(angleX) - this.z * Math.sin(angleX)
        const z = this.y * Math.sin(angleX) + this.z * Math.cos(angleX)

        const x = this.x * Math.cos(angleY) + z * Math.sin(angleY)
        const z2 = -this.x * Math.sin(angleY) + z * Math.cos(angleY)

        return new Point3D(x, y, z2)
      }
    }

    class Cube {
      constructor(size) {
        this.size = size
        this.vertices = [
          new Point3D(-size, -size, -size),
          new Point3D(size, -size, -size),
          new Point3D(size, size, -size),
          new Point3D(-size, size, -size),
          new Point3D(-size, -size, size),
          new Point3D(size, -size, size),
          new Point3D(size, size, size),
          new Point3D(-size, size, size),
        ]

        this.edges = [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 0],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 4],
          [0, 4],
          [1, 5],
          [2, 6],
          [3, 7],
        ]
      }
    }

    const cube = new Cube(100)

    function project(point) {
      const fov = 600
      const viewerDistance = 400

      const factor = fov / (viewerDistance + point.z)
      return new Point3D(point.x * factor + canvas.width / 2, point.y * factor + canvas.height / 2, point.z)
    }

    let baseAngleX = 0
    let baseAngleY = 0
    let mouseAngleX = 0
    let mouseAngleY = 0
    let lastFrameTime = 0

    const trailHistory = []
    const trailLength = 22

    const autoRotationSpeedX = 0.003
    const autoRotationSpeedY = 0.002

    function animate(timestamp = 0) {
      const delta = lastFrameTime ? (timestamp - lastFrameTime) / 16.67 : 1
      lastFrameTime = timestamp

      const mouseInfluence = 0.002

      mouseAngleX += ((mouseY - canvas.height / 2) * mouseInfluence - mouseAngleX) * 0.05
      mouseAngleY += ((mouseX - canvas.width / 2) * mouseInfluence - mouseAngleY) * 0.05

      baseAngleX += autoRotationSpeedX * delta
      baseAngleY += autoRotationSpeedY * delta

      const angleX = baseAngleX + mouseAngleX
      const angleY = baseAngleY + mouseAngleY

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const projectedVertices = cube.vertices.map((v) => v.rotate(angleX, angleY)).map(project)

      const hue = (Math.atan2(angleY, angleX) * 180) / Math.PI

      trailHistory.unshift({
        vertices: projectedVertices.map((v) => ({ ...v })),
        hue,
      })

      if (trailHistory.length > trailLength) trailHistory.pop()

      for (let i = trailHistory.length - 1; i >= 0; i--) {
        const { vertices, hue: frameHue } = trailHistory[i]
        const fade = 1 - i / trailLength
        const opacity = 0.1 + fade * 0.25
        const blurIntensity = 10 * fade

        cube.edges.forEach((edge) => {
          const p1 = vertices[edge[0]]
          const p2 = vertices[edge[1]]
          const avgZ = (p1.z + p2.z) / 2

          ctx.shadowColor = `hsla(${frameHue}, 100%, 70%, ${opacity * 0.6})`
          ctx.shadowBlur = blurIntensity

          ctx.strokeStyle = `hsla(${frameHue}, 100%, ${avgZ > 0 ? 50 : 40}%, ${opacity})`
          ctx.lineWidth = (avgZ > 0 ? 5.5 : 3.5) * (1 + fade * 0.7)

          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        })
      }

      ctx.shadowColor = "transparent"
      requestAnimationFrame(animate)
    }

    animate()
  }
}

// ================= PARTICLES (Optimized for Mobile) =================
function createParticles() {
  const container = document.getElementById("particles")
  if (!container) return

  let particleCount = 80
  if (isMobile()) {
    particleCount = 0 // Completely disable on mobile
    container.style.display = "none"
  } else if (isTablet()) {
    particleCount = 40 // Reduce on tablets
  }

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"

    const colors = [
      "rgba(0, 255, 136, 0.6)",
      "rgba(0, 255, 200, 0.5)",
      "rgba(100, 255, 200, 0.4)",
      "rgba(0, 200, 255, 0.5)",
    ]

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const size = Math.random() * 3 + 1

    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, ${randomColor}, transparent);
      border-radius: 50%;
      box-shadow: 0 0 ${size * 3}px ${randomColor};
      animation: float ${Math.random() * 8 + 6}s ${Math.random() * 5}s infinite ease-in-out;
    `

    container.appendChild(particle)
  }
}

createParticles()

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// ================= FADE-IN OBSERVER (Optimized) =================
const fadeObserverOptions = {
  threshold: isMobile() ? 0.01 : 0.15,
  rootMargin: isMobile() ? "100px 0px" : "0px 0px -50px 0px",
}

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running"
      entry.target.classList.add("visible")
      if (!isMobile()) {
        fadeObserver.unobserve(entry.target)
      }
    }
  })
}, fadeObserverOptions)

document.querySelectorAll(".fade-in-up, .fade-in").forEach((el) => {
  fadeObserver.observe(el)
})

// ================= PROGRESS BARS ANIMATION =================
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressFills = entry.target.querySelectorAll(".progress-fill")
      progressFills.forEach((fill, index) => {
        const widthValue = fill.style.width
        const delay = isMobile() ? 50 + index * 100 : 100 + index * 200
        fill.style.width = "0"
        setTimeout(() => {
          fill.style.width = widthValue
        }, delay)
      })
      progressObserver.unobserve(entry.target)
    }
  })
}, fadeObserverOptions)

document.querySelectorAll(".stats-card").forEach((card) => {
  progressObserver.observe(card)
})

// ================= COUNT EFFECT ANIMATION =================
const countObserverOptions = {
  threshold: isMobile() ? 0.01 : 0.15,
  rootMargin: isMobile() ? "100px 0px" : "0px 0px -50px 0px",
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const countElements = entry.target.querySelectorAll(".count-number")
      countElements.forEach((el) => {
        const target = Number.parseFloat(el.dataset.target)
        const format = el.dataset.format || "number"
        const prefix = el.dataset.prefix || ""
        const suffix = el.dataset.suffix || ""
        const duration = isMobile() ? 800 : 2000

        animateCount(el, target, format, prefix, suffix, duration)
      })
      countObserver.unobserve(entry.target)
    }
  })
}, countObserverOptions)

function animateCount(element, target, format, prefix, suffix, duration) {
  let current = 0
  const increment = target / (duration / 16)
  const startTime = Date.now()

  function update() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    current = target * progress

    let displayValue
    if (format === "decimal") {
      displayValue = current.toFixed(1)
    } else {
      displayValue = Math.floor(current)
    }

    element.textContent = prefix + displayValue + suffix

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  update()
}

document.querySelectorAll(".result-card").forEach((card) => {
  countObserver.observe(card)
})

// ================= PORTFOLIO SLIDER =================
const slider = document.querySelector(".slider")
const prevBtn = document.querySelector(".slider-nav-prev")
const nextBtn = document.querySelector(".slider-nav-next")

if (slider && prevBtn && nextBtn) {
  let currentIndex = 0
  const cards = document.querySelectorAll(".portfolio-card")
  const cardWidth = 320 + 32 // card width + gap
  const maxIndex = cards.length - Math.floor(slider.parentElement.offsetWidth / cardWidth)

  nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`
    }
  })

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`
    }
  })

  // Reset on window resize
  window.addEventListener("resize", () => {
    currentIndex = 0
    slider.style.transform = "translateX(0)"
  })
}

// ================= CONTACT FORM =================
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = contactForm.querySelector('input[name="name"]').value
    const email = contactForm.querySelector('input[name="email"]').value
    const message = contactForm.querySelector('textarea[name="message"]').value

    const whatsappNumber = "971561927597"
    const whatsappMessage = `Hello! My name is ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    window.open(whatsappURL, "_blank")

    contactForm.reset()
  })
}

// ================= WHATSAPP BUTTON =================
document.querySelectorAll(".cta-button").forEach((button) => {
  if (button.textContent.includes("WhatsApp")) {
    button.addEventListener("click", () => {
      window.open("https://wa.me/971561927597", "_blank")
    })
  }
})

console.log("✨ Website initialized successfully! Mobile optimizations active:", isMobile())
