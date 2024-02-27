class SpecialNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
    <div class="container ">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Model</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Community Tab</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Sign in</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        `
    }
}
customElements.define('special-nav', SpecialNav)