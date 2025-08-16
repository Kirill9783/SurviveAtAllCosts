import Faq from "./faq.js";

const slides = document.querySelector('.hero__slider');
const slideCount = document.querySelectorAll('.hero__slide').length; // Количество слайдов

let currentIndex = 0;
let autoPlayInterval;

function goToSlide(index) {
    if (index < 0) {
        index = slideCount - 1;
    } else if (index >= slideCount) {
        index = 0;
    }
    currentIndex = index;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), 3000);
}

startAutoPlay();


const header = document.querySelector(".header");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    header.classList.toggle("header--open");
});

// Находим контейнер со слайдами
const sosSlides = document.querySelector('.sos__slides');
const sosSlideCount = document.querySelectorAll('.sos__slide').length; // Количество слайдов
const sosPrevButton = document.querySelector('.sos__prev');
const sosNextButton = document.querySelector('.sos__next');
const sosSlider = document.querySelector('.sos__slider');

let sosCurrentIndex = 0; // Текущий индекс слайда
let sosAutoPlayInterval; // Интервал для автопрокрутки

/**
 * Функция смены слайда.
 * @param {number} index - Индекс слайда, на который нужно перейти.
 */
function toSlide(index) {
    if (index < 0) {
        index = sosSlideCount - 1; // Если нажали "Назад" на первом слайде, переходим к последнему
    } else if (index >= sosSlideCount) {
        index = 0; // Если нажали "Вперед" на последнем слайде, переходим к первому
    }
    sosCurrentIndex = index;
    sosSlides.style.transform = `translateX(${-index * 100}%)`; // Смещение слайдов
}

// Обработчики кликов для кнопок
sosPrevButton.addEventListener('click', () => toSlide(sosCurrentIndex - 1));
sosNextButton.addEventListener('click', () => toSlide(sosCurrentIndex + 1));

/**
 * Запускает автоматическую прокрутку слайдов.
 */
function startPlay() {
    sosAutoPlayInterval = setInterval(() => toSlide(sosCurrentIndex + 1), 3000);
}

/**
 * Останавливает автоматическую прокрутку.
 */
function stopAutoPlay() {
    clearInterval(sosAutoPlayInterval);
}

startPlay(); // Запускаем автопрокрутку
sosSlider.addEventListener('mouseenter', stopAutoPlay); // Остановка при наведении мыши
sosSlider.addEventListener('mouseleave', startPlay); // Возобновление при уходе мыши

new Faq();