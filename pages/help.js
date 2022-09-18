import Header from "../components/organisms/header/header"

export default function Help() {
    return (
        <div>
            <Header/>
            <section className="help">
                <h2 className="help__heading">ASK US A QUESTION</h2>
                <form className="help__form" action="/send-data-here" method="post">
                    <label for="topic">Topic</label>
                    <input type="text" id="topic" name="topic" />

                    <label for="question">Question</label>
                    <textarea id="question" name="question"></textarea>

                    <button type="submit" class="btn btn--primary raise-hand">
                        Submit
                    </button>
                </form>
            </section>
        </div>
      )
}