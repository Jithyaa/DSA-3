 class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
 }
 class binary{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root===null;
    }
    insert(value){
        let node=new Node(value);
        if(this.isEmpty()){
            this.root=node;
        }else{
            this.insertNode(this.root,node);
        }   
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node;
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node;
            }else{
                this.insertNode(root.right,node);
            }
        }
    }
    search(root,value){
       if(!root){
        return false;
       }else{
        if(root.value===value){
            return true;
        }else if(value<root.value){
            return this.search(root.left,value);
        }else{
            return this.search(root.right,value);
        }
       }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    levelOrder(){
        let queue=[];
        queue.push(this.root);
        while(queue.length){
            let curr=queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }

    }
    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right);
        }
    }
    remove(value){
        this.root=this.removeNode(this.root,value);
    }
    removeNode(root,value){
        if(root===null){
            return root;
        }
        if(value<root.value){
            root.left=this.removeNode(root.left,value);
        }else if(value>root.value){
            root.right=this.removeNode(root.right,value);
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.value=this.min(root.right);
            root.right=this.removeNode(root.right,root.value)
        }
        return root;
    }
    isBST(root){
        if(root===null){
            return true;
        }
        if(root.left!== null && root.value<root.left.value){
            return false;
        }
        if(root.right !== null && root.value>root.right.value){
            return false;
        }
        return this.isBST(root.right) && this.isBST(root.left);
    }
 }
 let list=new binary();
 list.insert(10);
 list.insert(5);
 list.insert(15);
 list.insert(3);
 list.insert(7);
 console.log(list.search(list.root,10));
 console.log(list.search(list.root,11));
 list.postOrder(list.root);
list.preOrder(list.root);
list.inOrder(list.root);
list.levelOrder();
console.log(list.min(list.root));
console.log(list.max(list.root));
list.remove(10);
list.levelOrder();
console.log(list.isBST(list.root));

