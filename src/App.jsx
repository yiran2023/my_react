import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';

// const schedule = {
//   "title": "CS Courses for 2018-2019",
//   "courses": {
//     "F101" : {
//       "term": "Fall",
//       "number": "101",
//       "meets" : "MWF 11:00-11:50",
//       "title" : "Computer Science: Concepts, Philosophy, and Connections"
//     },
//     "F110" : {
//       "term": "Fall",
//       "number": "110",
//       "meets" : "MWF 10:00-10:50",
//       "title" : "Intro Programming for non-majors"
//     },
//     "S313" : {
//       "term": "Spring",
//       "number": "313",
//       "meets" : "TuTh 15:30-16:50",
//       "title" : "Tangible Interaction Design and Learning"
//     },
//     "S314" : {
//       "term": "Spring",
//       "number": "314",
//       "meets" : "TuTh 9:30-10:50",
//       "title" : "Tech & Human Interaction"
//     }
//   }
// };

const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading course data...</h1>;
  if (!data) return <h1>No course data found</h1>;

  return Object.values(data.courses).map(course => <div key={course.term + course.number}>{course.term} {course.meets} {course.title}</div>);
}

const queryClient = new QueryClient();


// const title = schedule.title;
// const courses = schedule.courses;

const App = () => {
  return (
    // <>
    //   <Banner 
    //     title = {schedule.title}
    //   />
    //   <CourseList 
    //     courses = {schedule.courses}
    //   />
    // </>

    <QueryClientProvider client={queryClient}>
      <div className="container">   
        {/* <Banner 
          title = {schedule.title}
        />
        <CourseList 
          courses = {schedule.courses}
        /> */}
        <Main />
      </div>
    </QueryClientProvider>
  );
};

export default App;