export class MyStack<T>
{ 
    private data: T[] = [];    

    push(value: T): void { 
        this.data.push(value);
    }

    pop(): T | undefined
    {
        return this.data.pop();
    }

    getAllItem():T[]
    {
        return this.data;
    }
}

export default MyStack;



