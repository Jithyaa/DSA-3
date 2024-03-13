class TrieNode{
    constructor(){
        this.children=new Map();
        this.endSymbol="*";

    }
}
class Trie{
    constructor(){
        this.root=new TrieNode();

    }
    Insert(word){
        let node =this.root;
        for(let letter of word){
            if(!node.children.has(letter)){
                node.children.set(letter,new TrieNode())
            }
            node=node.children.get(letter);
        }
        node.children.set(this.endSymbol,null);
    }
    search(word){
        let node=this.root;
        for(let letter of word){
           if(!node.children.has(letter)){
            return false;
           }
           node=node.children.get(letter);
        }
        if(node.children.has(this.endSymbol)){
            return true;
        }
    }
}

const tr=new Trie();
tr.Insert("word");
tr.Insert("love");
console.log(tr.search("word"));
console.log(tr.search("love"));