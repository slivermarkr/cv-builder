export default function ContactView({ value }) {
    const about = value['about'];
    const mock = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    return (
        <>
            <section className="about-view">
                <div className="container flex">
                    <div className="title about-view--title">About Me</div>
                    <p>
                        {about ?? mock}
                    </p>

                </div>
            </section>
            <hr className="hr"></hr>
        </>
    )
}