import Dots from "@/components/Dots";

export default (t) => {
    return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="#contacts">${t.button} =></a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" class="hero__logo">
                <img src="/images/hero.png" alt="Gabriela" class="hero__image" style="margin-left: 30px; margin-bottom: 2px; width: 375px; height: 375px; ">
                <div class="hero__status">${t.status}</div>
                ${Dots({})}
            </div>
        </section>
    `;
};
