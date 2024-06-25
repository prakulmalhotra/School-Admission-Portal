function talk(){
    var know = {
    "Who are you" : "Hello, PNP School here ",
    "How are you" : "Good :)",
    "what can i do for you" : "Help you with the admission process",
    "ok" : "Thank You So Much ",
    "What is the school's mission and philosophy?" : "School Mission and Philosophy: Our school's mission is to provide a nurturing and inclusive learning environment that promotes academic excellence, character development, and a love for lifelong learning. Our philosophy is rooted in the belief that every student can achieve their full potential.",
    "What is the curriculum and teaching approach?" : "Curriculum and Teaching Approach: We offer a well-rounded curriculum that combines traditional subjects with a focus on critical thinking and creativity. Our teaching approach is student-centered, fostering active participation and hands-on learning experiences.",
    "hi" : "Hello, PNP SCHOOL CHATBOT HERE!",
    "Are there any specific academic programs or extracurricular activities that the school offers?" : "Academic and Extracurricular Programs: We offer a range of academic programs, including advanced placement and honors courses. Our extracurricular activities encompass sports, arts, clubs, and community service initiatives.",
    "What is the student-to-teacher ratio in the classroom?" : "Student-to-Teacher Ratio: The average student-to-teacher ratio in our classrooms is 15:1, ensuring personalized attention and support for each student.",
    "How does the school handle student discipline and behavior management?" : " Discipline and Behavior Management: Our school emphasizes a positive and proactive approach to discipline, focusing on teaching appropriate behavior and conflict resolution skills.",
    "Are there opportunities for parental involvement in the school community?" : "Parental Involvement: We encourage parental involvement through PTA meetings, volunteering opportunities, and regular communication with teachers and staff.",
    "What is the school's policy on homework and testing?" : "Homework and Testing Policy: Homework and testing are an integral part of our academic program, and the policies are designed to promote student growth while maintaining a healthy work-life balance.",
    "How does the school support students with special needs or learning differences?" : "Support for Special Needs Students: We have dedicated support services for students with special needs, including individualized education plans (IEPs) and accommodations as required.",
    "how is the parent teacher interaction" : "Communication Procedures: We have a structured system for parent-teacher communication, including regular progress reports, parent-teacher conferences, and an online portal to track student performance.",
    "does your school provide financial assistance" : "Financial Assistance: We offer scholarships and financial aid programs for eligible families. You can inquire about specific criteria and the application process. 8019 ",
    "how is the safety and security of the school" : "*Safety and Security:* The safety and security of our students are a top priority. We have security measures in place, including controlled access to the campus and emergency response plans.",
    "what is the mission of the school" : "School Mission and Philosophy: Our school's mission is to provide a nurturing and inclusive learning environment that promotes academic excellence, character development, and a love for lifelong learning. Our philosophy is rooted in the belief that every student can achieve their full potential.",
    "bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }