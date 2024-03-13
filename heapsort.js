class heapSort{
    constructor(){
        this.heap=[];
    }
    build(array){
        this.heap=array;
        let n=this.heap.length;
        for(let i=Math.floor(this.heap.length/2)-1 ;i>=0 ;i--){
            this.heapifyDown(n,i);
        }
        for(let i=this.heap.length-1;i>0 ;i--){
            this.swap(i,0);
            this.heapifyDown(i,0);
        }
    }
    heapifyDown(parentIdx){
        let leftChildIdx=Math.floor(parentIdx*2+1);
        let rightChildIdx=Math.floor(parentIdx*2+2);
        let largeIdx=parentIdx;
        
        if(leftChildIdx<heapLength && this.heap[leftChildIdx]>this.heap[largeIdx]){
            largeIdx=leftChildIdx;
        }
        if(rightChildIdx<heapLength && this.heap[rightChildIdx]>this.heap[largeIdx]){
            largeIdx=rightChildIdx;
        }
        if(largeIdx!==parentIdx){
            this.swap(largeIdx,parentIdx);
            this.heapifyDown(largeIdx);
        }
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]];
    }
    print(){
        console.log(this.heap);
    }
}
const hs = new heapSort();
let array=[4,8,3,8,6,1,5];
hs.build(array);
hs.print();