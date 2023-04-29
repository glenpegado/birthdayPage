import Person from './Person';

function List({ profile }) {
  return (
    <section>
      {profile.map((el) => {
        return <Person key={el.id} {...el} />;
      })}
    </section>
  );
}
export default List;
