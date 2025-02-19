
interface Service {
    title: string;
    description: string;
    icon: JSX.Element;
}

interface ServicesProps {
    services: Service[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">ПОЧЕМУ ИМЕННО МЫ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="border p-6 rounded-lg shadow-md">
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}