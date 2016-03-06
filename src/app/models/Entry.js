import fecha from 'fecha';

class Entry {
    constructor(date = new Date(), content = '') {
        this.id = fecha.format(date, 'YYYY-MM-DD');
        this.content = content;
    }
}

export default Entry;
