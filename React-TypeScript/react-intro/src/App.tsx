interface HeaderProps {
  coureName: string
}

interface CoursePart {
  name: string,
  exerciseCount: number
}

interface ContentProps {
  courseParts: CoursePart[]
}

interface TotalProps {
  courseExercises: number
}

const Header = (props: HeaderProps) => {
  return (
    <h1>
      {props.coureName}
    </h1>
  )
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.courseParts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exerciseCount}
        </p>
      ))}
    </div>
  );
};

const Total = (props: TotalProps) => {
  return (
    <p>
      Number of exercises {props.courseExercises}
    </p>
  )
};

const App = () => {
  const courseName = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header coureName={courseName}/>
      <Content courseParts={courseParts}/>
      <Total courseExercises={totalExercises}/>
    </div>
  );
};

export default App;