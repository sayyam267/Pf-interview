export interface ShowableRoute {
    Name?: string;
    Icon: string;
    Title: string;
    Chip: number;
    Color: string;
    Position?: number;
}

export interface AnyObject {
    [key: string]: any;
}
