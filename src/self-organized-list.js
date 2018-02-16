class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(data) {
        var node = new Node(data);
        if (this.length > 0) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    at(index) {
        var count = 0,
            ReturnNode = this.head;
        if (this.length == 0 || this.length < index || index < 0) {
            return null;
        } else {
            for (; count < index; count++) {
                ReturnNode = ReturnNode.next;
            }
        }
        return ReturnNode.data;
    }

    findNode(data) {
        var ReturnNode = this.head;
        while (ReturnNode != null) {
            if (ReturnNode.data == data) {
                return ReturnNode;
            }
            ReturnNode = ReturnNode.next;
        }
        return null;
    }

    toArray() {
        var ReturnNode = this.head,
            ReturnArray = [];
        while (ReturnNode != null) {
            ReturnArray.push(ReturnNode.data);
            ReturnNode = ReturnNode.next;
        }
        return ReturnArray;
    }

    removeAt(index) {
        var count = 0,
            node = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            if (index == 0) {
                this.head = this.head.next;
                this.head.prev = null;
            } else {
                if (index == this.length - 1) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    for (; count < index; count++) {
                        node = node.next;
                    }
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                }
            }
        }
        this.length--;
    }

    moveToFront(node) { //тут код мне не нравится, н̶о̶ ̶д̶в̶и̶г̶а̶т̶ь̶ ̶д̶а̶т̶у̶ ̶ч̶е̶р̶е̶з̶ ̶в̶е̶с̶ь̶ ̶с̶п̶и̶с̶о̶к̶ ̶и̶д̶е̶я̶ ̶е̶щ̶е̶ ̶х̶у̶ж̶е̶  я её таки двигаю
        var tempData=node.data;
        while(node!=this.head){
            node.data=node.prev.data;
            node=node.prev;
        }
        this.head.data=tempData;
    }

    reorganize(data) {
        var tempNode = this.findNode(data);
        if (tempNode) {
            this.moveToFront(tempNode);
            return true;
        }
        return false;
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};