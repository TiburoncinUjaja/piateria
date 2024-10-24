import React from 'react'


export const AboutUs = () => {
  let imagen = "https://flipcat-prod.s3.amazonaws.com/flipcat-store/20240406085847/IMG_20230523_230202.jpg";

  const img1 = 'https://flipcat-prod.s3.amazonaws.com/flipcat-store/20240406085847/IMG_20230523_230202.jpg';
  const img2 = 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/e6de0506ff14cb5239f198baf0b45ebd.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp';
  const img3 = 'https://www.teleflor.com.ar/wp-content/uploads/cuanto-cuesta-la-decoracion-de-una-boda.webp';
  const img4 = 'https://i0.wp.com/www.fiestaideasclub.com/wp-content/uploads/2015/09/original_decoracion_con_globos_fiestaideas_00011.jpg?resize=416%2C416';
  const img5 = 'https://www.recreoviral.com/wp-content/uploads/2018/03/Decoraci%C3%B3n-con-globos-gigantes-10.jpg';
  const img6 = 'https://i.pinimg.com/736x/39/9c/27/399c27ac7c02f19da87dde6eb2f925dc.jpg';
  const img7 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8OaijrsrlF5Uw3ZxQGNrBxDqV1DhO2lcGAanmFT_YQ&s';
  const img8 = 'https://keefiesta.com/wp-content/uploads/2022/04/decoracion-de-cumpleanos-para-mujer-sencilla-con-globos-1.jpg';
  const img9 = 'https://i.pinimg.com/originals/f7/3f/38/f73f384782ede6a35cdb692450903855.jpg';
  const img10 = 'https://globosfloresyfiestas.com/wp-content/uploads/2022/06/bouquet-de-globos-170.jpg';
  const img11 = 'https://www.globoscolombia.co/wp-content/uploads/2020/09/Taller_Bouquets-3.jpg';
  const img12 = 'https://www.globosmasmelo.com.co/wp-content/uploads/2024/03/D_930713-MCO75172720615_032024-F.jpg';
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img1} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img6} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img7} alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img8} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img5} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img9} alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img10} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img11} alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={img12} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h2 className="mt-5 text-3xl font-bold text-Azul-oscuro">Sobre nosotros
                    </h2>
                    <p className="mb-8 leading-relaxed ">En nuestra piñatería en Neiva, Huila, nos enorgullece ofrecer una amplia variedad de productos coloridos y divertidos que hacen que cada celebración sea aún más especial. Con años de experiencia en el arte de la piñatería, nos dedicamos a proporcionar a nuestros clientes la más alta calidad en cada detalle, desde piñatas tradicionales hasta creaciones personalizadas que reflejan la imaginación y el espíritu festivo de nuestra comunidad. ¡Estamos aquí para convertir tus eventos en momentos inolvidables de alegría y diversión!</p>
                </div>

      </div>
    </section>
  )
}
