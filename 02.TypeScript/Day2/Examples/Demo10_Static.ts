 class Circle {
    static pi: number = 3.14;    

    static calculateArea(radius:number) {        
        return this.pi * radius * radius;
    }   

    m1()
    {
        // Accessing Static Members inside the instance methods.
        Circle.calculateArea(6);
    }

  }
  
  console.log("The value of PI : " +    Circle.pi ); // returns 3.14
  let area  = Circle.calculateArea(5); // returns 78.5
  console.log( "Area : "  + area);

  
  
  