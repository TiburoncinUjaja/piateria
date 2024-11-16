import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CateogriaPiñata from "../img/CategoriaPiñatas.jpg";
import CategoriaInflables from "../img/CategoriaInflables.jpg";
import CategoriaJuguetes from "../img/CategoriaJuguetes.jpg";
import CategoriaDecoraciones from "../img/CategoriaDecoraciones.jpg";
import CategoriaOtros from "../img/CategoriaOtros.jpg";
import CategoriaVelas from "../img/CategoriaVelas.jpg";
import CategoriaNueo from "../img/CategoriaNueo.jfif";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

const CategorySlide = ({index, src, name, changeCategory, categoria}) => {
    return (
        <Slide index={index}>
            <div className="flex flex-shrink-0 relative w-full sm:w-auto group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 h-64 cursor-pointer"
            onClick={() => changeCategory(categoria)}>
            <img src={src} alt="black chair and white table" className="object-cover object-center w-full h-full rounded-lg" />
                <div className="absolute  bottom-0 bg-gradient-to-t h-28 from-gray-600 from-1% to-99% to-transparent w-full h-full p-3"></div>
                <div className="absolute w-full h-full p-6 flex flex-col justify-end">
                    <h2 className="lg:text-xl font-quicksand leading-4  font-semibold lg:leading-5 text-white">{name}</h2>
                    <div className="flex items-end pt-2 transform opacity-0 translate-y-4 transition duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-sm lg:text-sm leading-5 lg:leading-3 text-white ">
                            Ver más
                        </h3>
                    </div>
                </div>
            </div>
        </Slide>
    )
}

const CarouselCategories = ({categoria, setCategoria}) => {
    const changeCategory = (selectedCategory) => {
        setCategoria(selectedCategory); 
    };
    return (
        <div className="container mx-auto">
            <h2 className="sm:text-2xl font-medium text-center pb-4 title-font pl-3 text-Azul-oscuro border-b border-blue-300">
            Categorias
            </h2>
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={18} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex p-5 lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <CategorySlide index={1} src={CategoriaNueo} name="Lo más reciente" changeCategory={changeCategory} categoria=""/>
                                <CategorySlide index={2} src={CateogriaPiñata} name="Piñatas" changeCategory={changeCategory} categoria="piñatas"/>
                                <CategorySlide index={3} src={CategoriaInflables} name="Inflables" changeCategory={changeCategory} categoria="inflables"/>
                                <CategorySlide index={4} src={CategoriaJuguetes} name="Juguetes" changeCategory={changeCategory} categoria="Juguetes"/>
                                <CategorySlide index={5} src={CategoriaDecoraciones} name="Decoraciones" changeCategory={changeCategory} categoria="decoracion"/>
                                <CategorySlide index={6} src={CategoriaVelas} name="Velas" changeCategory={changeCategory} categoria="velas"/>
                                <CategorySlide index={7} src={CategoriaOtros} name="Otros" changeCategory={changeCategory} categoria="Otros"/>

                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={18} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={18} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <CategorySlide index={1} src={CategoriaNueo} name="Lo más reciente" changeCategory={changeCategory} categoria=""/>
                                <CategorySlide index={2} src={CateogriaPiñata} name="Piñatas" changeCategory={changeCategory} categoria="piñatas"/>
                                <CategorySlide index={3} src={CategoriaInflables} name="Inflables" changeCategory={changeCategory} categoria="inflables"/>
                                <CategorySlide index={4} src={CategoriaJuguetes} name="Juguetes" changeCategory={changeCategory} categoria="Juguetes"/>
                                <CategorySlide index={5} src={CategoriaDecoraciones} name="Decoraciones" changeCategory={changeCategory} categoria="decoracion"/>
                                <CategorySlide index={6} src={CategoriaVelas} name="Velas" changeCategory={changeCategory} categoria="velas"/>
                                <CategorySlide index={7} src={CategoriaOtros} name="Otros" changeCategory={changeCategory} categoria="Otros"/>                      
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                <CategorySlide index={1} src={CategoriaNueo} name="Lo más reciente" changeCategory={changeCategory} categoria=""/>
                                <CategorySlide index={2} src={CateogriaPiñata} name="Piñatas" changeCategory={changeCategory} categoria="piñatas"/>
                                <CategorySlide index={3} src={CategoriaInflables} name="Inflables" changeCategory={changeCategory} categoria="inflables"/>
                                <CategorySlide index={4} src={CategoriaJuguetes} name="Juguetes" changeCategory={changeCategory} categoria="Juguetes"/>
                                <CategorySlide index={5} src={CategoriaDecoraciones} name="Decoraciones" changeCategory={changeCategory} categoria="decoracion"/>
                                <CategorySlide index={6} src={CategoriaVelas} name="Velas" changeCategory={changeCategory} categoria="velas"/>
                                <CategorySlide index={7} src={CategoriaOtros} name="Otros" changeCategory={changeCategory} categoria="Otros"/>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}

export default CarouselCategories
