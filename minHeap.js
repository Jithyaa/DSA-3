class minHeap{
      constructor(){
     this.heap=[];
     }
     build(array){
     this.heap=array;
     for(let i=Math.floor(this.heap.length/2)-1 ;i>=0 ;i--){
     this.heapifyDown(i); 
     }
     }
     heapifyDown(parentIdx){
     let leftChildIdx=parentIdx*2+1;
     let rightChildIdx=parentIdx*2+2;
     let largeIdx=parentIdx;
    
     if(leftChildIdx<this.heap.length && this.heap[leftChildIdx]<this.heap[largeIdx]){
     largeIdx=leftChildIdx;
     }
     if(rightChildIdx<this.heap.length && this.heap[rightChildIdx]<this.heap[largeIdx]){
     largeIdx=rightChildIdx;
     }
     if(largeIdx!==parentIdx){
     this.swap(largeIdx,parentIdx);
     this.heapifyDown(largeIdx);
     }
     }
     Insert(val){
     this.heap.push(val);
     this.heapUp(this.heap.length-1);
     }
     heapUp(idx){
     let parentIdx=Math.floor((idx-1)/2);
     if(this.heap[parentIdx]<this.heap[idx]){
     this.swap(parentIdx,idx);
     this.heapUp(parentIdx);
    
     }
     
    
     }
     remove(){
     if(this.heap.length<=1){
     this.heap.pop()
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
    const min=new minHeap();
    let array=[2,5,4,7,8,99,100];
    min.build(array);
    min.Insert(77);
    min.removeValue(77);
    min.print();