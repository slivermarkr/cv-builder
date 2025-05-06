const mock = [['HTML', crypto.randomUUID()], ['CSS', crypto.randomUUID()], ['Git', crypto.randomUUID()], ['Javascript', crypto.randomUUID()], ['Typescript', crypto.randomUUID()]]
export default function SkillsView({ value }) {
    const skills = value['skills'];
    return (
        <>
            <section className="skills-view">
                <div className="container flex">
                    <div className="title">Skills</div>
                    <ul className="skills-list">
                        {
                            skills.length > 0 ?
                                skills.map((listItem) =>
                                    <li key={listItem[1]}>
                                        {listItem[0]}
                                    </li>
                                ) :
                                mock.map((listItem) =>
                                    <li key={listItem[1]}>
                                        {listItem[0]}
                                    </li>
                                )
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}