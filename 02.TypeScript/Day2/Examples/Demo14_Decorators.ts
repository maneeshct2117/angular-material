// tsc Demo14.ts --target ES5 --experimentalDecorators

function logger(target: any) {
    console.log("logger");
  }
 

@logger
class Demo
{
    
}

