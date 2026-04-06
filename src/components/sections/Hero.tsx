export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold mb-4">
                JOSE DANIEL ABUCEJO
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
                HAWAK MO ANG BEAT HAWAK MO ANG TADHANA
            </p>

            <div className="mt-6 flex gap-4">
                <a href="#projects" className="px-6 py-3 bg-white text-black rounded-xl">
                    View Projects
                </a>
                <a href="#contact" className="px-6 py-3 border rounded-xl">
                    Contact Me
                </a>
            </div>
        </section>
    )
}