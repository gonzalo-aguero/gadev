import "./style.css";

export default function Home() {
    return (
        <>
            <section id="home">
                <h1 className="text-shadow-1 md:text-[2.6rem] text-4xl font-sans font-bold text-left flex flex-col gap-4">
                    <span>Hello,</span>
                    <span>I'm a Software Developer</span>
                </h1>
            </section>
        </>
    );
}