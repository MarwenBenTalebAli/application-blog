export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title, content, loveIts, created_at) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = created_at;
    }
}
