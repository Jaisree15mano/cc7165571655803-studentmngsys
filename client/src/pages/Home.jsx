import Studentcard from "../components/Studentcard";
const dummyStudents=[
    {
        id:1,
        name:"john",
        roll:"1234",
        department:"computer science",
        email:"abcd@gmail.com"
    },
    {
        id:2,
        name:"alie",
        roll:"2356",
        department:"computer science",
        email:"bnfj@gmail.com"
    },
];

function Home() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dummyStudents.map((student) => (
                <Studentcard key={student.id} student={student} />
            ))}
        </div>
    );
    
}
export default Home;