import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <div className="pt-20">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Volver al inicio</span>
                    </Link>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Política de Privacidad</h1>
                    <p className="text-sm text-white/90">Última actualización: 19/09/2025</p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="px-6 py-8 md:px-12 md:py-12">
                            <div className="rich-text max-w-none text-gray-800">
                                <p>
                                    Esta Política de Privacidad explica cómo <strong>TrueView Analytics</strong> recopila, utiliza, divulga y protege la información
                                    personal cuando utilizas nuestra plataforma. Al acceder o usar el Servicio, aceptas los términos de esta Política.
                                </p>

                                <h2 className="text-2xl font-bold">1. Información que recopilamos</h2>

                                <h3 className="text-xl font-semibold">1.1 Información que nos proporcionas</h3>
                                <p>
                                    Recopilamos la información que nos facilitas al registrarte o al comunicarte con nosotros: nombre, correo electrónico,
                                    empresa, cargo y cualquier otro dato que decidas aportar.
                                </p>

                                <h3 className="text-xl font-semibold">1.2 Datos de reseñas y opiniones</h3>
                                <p>
                                    Nuestra plataforma procesa y analiza datos públicos de distintos canales online (por ejemplo, Booking, Expedia,
                                    TripAdvisor y otras OTAs). Estos datos se usan de forma agregada para generar insights y recomendaciones.
                                </p>

                                <h3 className="text-xl font-semibold">1.3 Datos de uso de la plataforma</h3>
                                <p>
                                    Recopilamos información sobre cómo utilizas la plataforma (actividad en dashboards, informes generados, preferencias)
                                    para mejorar tu experiencia y optimizar nuestras herramientas.
                                </p>

                                <h2 className="text-2xl font-bold">2. Cómo usamos tu información</h2>
                                <ul>
                                    <li>Para ofrecer, mantener y mejorar nuestros servicios.</li>
                                    <li>Para personalizar la experiencia y adaptar recomendaciones a tu negocio.</li>
                                    <li>Para cumplir con obligaciones legales y contractuales.</li>
                                </ul>

                                <h2 className="text-2xl font-bold">3. Cómo compartimos tu información</h2>
                                <p>
                                    Podemos compartir tu información con proveedores que prestan servicios en nuestra nombre (infraestructura cloud, analítica
                                    y soporte). Estos proveedores están obligados a proteger los datos y usarlos únicamente para los fines acordados.
                                </p>

                                <h3 className="text-xl font-semibold">3.1 Transferencias de negocio</h3>
                                <p>
                                    En caso de fusión, adquisición o venta de activos, tu información podrá transferirse como parte de la operación. Te
                                    informaremos mediante aviso en la web o por correo electrónico si esto ocurre.
                                </p>

                                <h3 className="text-xl font-semibold">3.2 Retención y eliminación de datos</h3>
                                <p>
                                    Cumplimos con el RGPD. Puedes ejercer tus derechos de acceso, rectificación, limitación y supresión. Conservamos los datos
                                    únicamente durante el tiempo necesario y puedes solicitar su eliminación escribiendo a
                                    <a className="text-blue-600 hover:underline" href="mailto:privacy@trueviewanalytics.com"> privacy@trueviewanalytics.com</a>.
                                </p>

                                <h2 className="text-2xl font-bold">4. Seguridad de la información</h2>
                                <p>
                                    Implementamos medidas técnicas y organizativas para proteger tus datos (por ejemplo, SSL/TLS en tránsito y cifrado de los
                                    datos en reposo). Sin embargo, ningún sistema es 100% infalible; recomendamos tomar precauciones adicionales cuando compartas información sensible.
                                </p>

                                <h2 className="text-2xl font-bold">5. Tus elecciones</h2>
                                <p>
                                    Puedes actualizar los datos de tu cuenta y gestionar tus preferencias de comunicación desde los ajustes. Para darte de baja
                                    de comunicaciones comerciales, sigue el enlace de baja incluido en nuestros correos.
                                </p>

                                <h2 className="text-2xl font-bold">6. Cambios en esta Política</h2>
                                <p>
                                    Podemos actualizar esta Política periódicamente. Si realizamos cambios significativos, te lo notificaremos antes de su entrada en vigor.
                                </p>

                                <h2 className="text-2xl font-bold">7. Contacto</h2>
                                <p>
                                    Si tienes preguntas o quieres ejercer tus derechos, contáctanos en
                                    <a className="text-blue-600 hover:underline" href="mailto:privacy@trueviewanalytics.com"> privacy@trueviewanalytics.com</a> o
                                    <Link className="text-blue-600 hover:underline" to="/contact"> ponte en contacto</Link> desde nuestra web.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
