function App() {


    class Person {
    name!: string;
    age!: number;
    }   


    
    let isTeacher: boolean = false;
    const name: string = "Rain";
    let age: number = 16;
    let colours:string[] = ["pink", "orange", "purple"];


    let student = new Person();

    student.name = name;
    student.age = age;
    student.isTeacher = isTeacher

    let people: Person[] = [
        { name: "Alain", age: 16, isTeacher: false},
        { name: "Kira", age: 20, isTeacher: false},
        { name: "Marcy", age: 17, isTeacher: false},
    
    ]

    return people[1].name;

}

export default App;