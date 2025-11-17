import wpp from '../../assets/wpp.png'
import './FooterContainer.css'
export default function FooterContainer() {
  return (
  <footer class="bg-dark text-light pt-4 mt-5">
    <div className="logo-wpp"> 
       <a 
        href="https://wa.me/5493884846638" target="_blank"> <img src={wpp} alt="logo wpp" /></a>
    </div>
  <div class="container">
    <div class="row">

      <div class="col-md-8 mb-3 p-3">
        <h5 class="fw-bold">Nortecno</h5>
        <p class="text-secondary">
          Tu lugar para encontrar los mejores productos al mejor precio.
        </p>
      </div>

      <div class="col-md-4 mb-3 p-3">
        <h5 class="fw-bold">Seguinos</h5>
        <div class="d-flex gap-3 fs-4">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-github"></i>
        </div>
      </div>

    </div>

    <hr class="border-secondary" />

    <p class="text-center text-secondary mb-0 pb-4">
      © 2025 Nortecno — Todos los derechos reservados.
    </p>
  </div>
</footer>

  )
}
