class maxHeap{
    constructor(){
        this.heap=[];
    }
    build(array){
        this.heap=array;
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.heapifyDown(i);
        }
    }
    heapifyDown(parent){
        let leftChild=Math.floor(parent*2+1);
        let rightChild=Math.floor(parent*2+2);
        let large=parent;
        if(leftChild<this.heap.length && this.heap[leftChild]>this.heap[large]){
            large=leftChild;
        }
        if(rightChild<this.heap.length && this.heap[rightChild]>this.heap[large]){
            large=rightChild;
        }
        if(large!==parent){
            this.swap(large,parent);
            this.heapifyDown(large);
        }

    }
    insert(value){
        this.heap.push(value);
        this.heapUp(this.heap.length-1);
    }
    heapUp(index){
        let parent=Math.floor((index-1)/2);
        if(this.heap[parent]<this.heap[index]){
            this.swap(parent,index);
            this.heapUp(parent);
        }
    }
    remove(){
        if(this.heap.length<=1){
            this.heap.pop();
        }else{
            this.swap(0,this.heap.length-1);
            this.heap[0]=this.heap.pop();
        }
        this.heapifyDown(0);
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]];
    }
    print(){
        console.log(this.heap);
    }
}
let max=new maxHeap();
let array=[2,5,4,6,3,2]
max.build(array);
max.insert(7);
max.remove(5)
max.print();