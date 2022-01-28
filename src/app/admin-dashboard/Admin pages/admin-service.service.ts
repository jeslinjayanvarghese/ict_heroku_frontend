import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import {Todo} from '../Admin pages/Todomodel/todomodel'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  todoList: Todo[] = []

  constructor(private http: HttpClient) { }
  
     server_address: string ='/api';
  //server_address: string = "http://localhost:3000"
  
  getCourses() {
    return this.http.get<any>(`${this.server_address}/course`);
  };
   
  // getCourseRegistrationAggr() {
  //   return this.http.get(`${this.server_address}/registration/registercourseAggr`)
  // };

  session_out() {
    this.http.get(`${this.server_address}/logout`)
  };

  getCourseRegistrationList() {
    return this.http.get(`${this.server_address}/registration/registercourseList`)
  };

  getSingleCourse(id: any) {
    return this.http.get(`${this.server_address}/course/courseSingle/`+id);
  };

  // updateCourseIndex(course: any) {
  //   return this.http.put(`${this.server_address}/course/Course/updateIndex`, course);
  // };

  editCourse(Course: any) {

    console.log("data arrived at service",Course)
    return this.http.post<any>(`${this.server_address}/course/Course/update`, Course);

  };

  newCourse(course: any) {
    return this.http.post<any>(`${this.server_address}/course/Course/add`, course);
  }

  deleteCourse(id: any) {
    console.log("id getting",id._id)
    return this.http.post<any>(`${this.server_address}/course/Course/remove`, id);
  }

  // course registered users
getregistereduser() {
  return this.http.get<any>(`${this.server_address}/registration/registercourseList`);
};
// delete registered user
deleteuser(data:any){
  return this.http.post(`${this.server_address}/registration/remove` ,data);
}
  

//!Testimonials
  
  
gettestimonial(id: any) {
  return this.http.get(`${this.server_address}/CourseTestimony/courseTestimony/` + id);
}


gettestimonials() {
  return this.http.get<any>(`${this.server_address}/CourseTestimony`);
}

updateTestimonialIndex(testimonial: any) {
  return this.http.put<any>(`${this.server_address}/testimonials/Testimonials/updateIndex`, testimonial);
};


newTestimonial(item: any) {

  return this.http.post<any>(`${this.server_address}/CourseTestimony/courseTestimony/add`,item)
}


deletetestimonial(testi: any) {
  console.log("inside delete ts")
  return this.http.post<any>(`${this.server_address}/CourseTestimony/courseTestimony/remove`, testi);
}


editTestimonial(item: any) {
  return this.http.post<any>(`${this.server_address}/CourseTestimony/testimonial/update`,item)
};

//!Events

getevent(id: any) {
  return this.http.get(`${this.server_address}/events/single/` +id);
}

newEvent(item: any) {

  return this.http.post(`${this.server_address}/eventsadmin/add`, item)
}

getevents() {
  return this.http.get(`${this.server_address}/events`);
}

  deleteevent(id: any) {
  console.log("delete service",id._id)
  return this.http.post(`${this.server_address}/eventsadmin/events/remove`,id);
}

  editEvent(item: any) {
  console.log("editevent starts")
  return this.http.post(`${this.server_address}/eventsadmin/event/update`, item)
}
  

updateEventIndex(event: any) {
  return this.http.put(`${this.server_address}/events/event/updateIndex`, event);
};

  //!admin backend calls

  newAdminUser(item:any){
    console.log(item);
    return this.http.post(`${this.server_address}/signup`,item);
  }

  deleteAdmin(item:any){
    return this.http.post(`${this.server_address}/signup/signup/remove`,item);
  }

  getAdminUsers(){
    return this.http.get(`${this.server_address}/signup/AdminList`);
  }

  getAdminUser(id:any){
    return this.http.get(`${this.server_address}/signup/admindata/`+id);
  }
  editAdminUser(item: any) {
    console.log("item found at editadmin",item)
    return this.http.post(`${this.server_address}/signup/signup/update`,item)
  }

  

  // !staff backend calls
  getstaff(id: any) {
    return this.http.get(`${this.server_address}/staffadmin/staffdata/` + id);
  }

  //all staff data 
  getstaffs() {
    return this.http.get(`${this.server_address}/staff`);
  }

  updateStaffIndex(staff: any) {
    console.log(staff);
    return this.http.put(`${this.server_address}/staffMenu/Staffs/updateIndex`, staff);
  };


  newStaff( item: any) {
    console.log('inside service upload')
    return this.http.post(`${this.server_address}/staffadmin/insert`, item);
  }

  deletestaff(staff: any) {
    return this.http.post<any>(`${this.server_address}/staffadmin/remove/`,staff);
  }

  editStaff(item: any) {
    console.log("editstaff success")
    return this.http.post<any>(`${this.server_address}/staffadmin/update`, item)
  };
  
  
// Academics
// academic list

getacademic() {
  return this.http.get(`${this.server_address}/academic`);
};
// delete academic
deleteacademic(AcademicAppln : any){
  return this.http.post(`${this.server_address}/academicadmin/remove`,AcademicAppln);
}



// corporate list
getcorporate() {
  return this.http.get<any>(`${this.server_address}/CorporateApplication/data`);
};
deletecorporate(corporate:any) {
  return this.http.post(`${this.server_address}/CorporateApplication/remove`,corporate);
};

// partnership
getpartnership() {
  return this.http.get<any>(`${this.server_address}/PartnershipApplication/partner`);
};
// delete partnership member
deletepartner(item:any){
  return this.http.post<any>(`${this.server_address}/PartnershipApplication/partner/remove` ,item);
}




  // !Todos

  getTodo() {
    return this.http.get<any>(`${this.server_address}/todo`);
  };

  addTodo(item: any) {
    console.log("item",item)
    return this.http.post<any>(`${this.server_address}/todo/todo/add`,item);
  }

  deleteTodo(item:any) {
    return this.http.post<any>(`${this.server_address}/todo/todo/remove`,item);
  };

  UpdateTodo(item:any) {
    return this.http.get<any>(`${this.server_address}/todo/update`,item);
  };


  //! industry

  addIndustry(item: any) {
    console.log("item",item)
    return this.http.post<any>(`${this.server_address}/industrypartneradmin/add`,item);
  }

  ViewIndustry() { 

    return this.http.get(`${this.server_address}/industry`);
   
  }

  RemoveIndus(data: any) {
  console.log("vannitundeee")
  return this.http.post(`${this.server_address}/industrypartneradmin/remove/`,data);
  }

  //Knowledge
  addKnowledge(item: any) {
    console.log("item",item)
    return this.http.post<any>(`${this.server_address}/knowledgeadmin`,item);
  }

  ViewKnowledge() { 

    return this.http.get(`${this.server_address}/knowledge`);
   
  }

  RemoveKnowledge(data: any) {
  console.log("remove")
  return this.http.post<any>(`${this.server_address}/knowledgeadmin/remove`,data);
  }


  //patrons
  addpatrons(item: any) {
    console.log("item",item)
    return this.http.post<any>(`${this.server_address}/patronadmin/add`,item);
  }

  Viewpatron() { 

    return this.http.get(`${this.server_address}/patrons`);
   
  }

  Removepatron(data: any) {
  console.log("vannitundeee")
  return this.http.post(`${this.server_address}/patronadmin/remove/`,data);
  }




    
}





