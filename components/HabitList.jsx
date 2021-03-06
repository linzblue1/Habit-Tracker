import SingleHabit from './SingleHabit'

const HabitList = ({ habits }) => {
    return (
        <section>
            <h2>My Habits</h2>
            {habits.map(habit => (
                <SingleHabit key={habit} habit={habit} />
            ))}
        </section>
    )
}

export default HabitList;