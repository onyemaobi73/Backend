export interface iAuth {
    userName?: string;
    email?: string;
    password?:string;
    avatar?: string;
}

export interface iStep {
    assignedTask?: string;
    assignedAvatar?: string;
    assignedName?: string;
    assignedPriority?: string;
    task?: {};
}

export interface iTask {
    task? :string;
    avatar?:string;
    name?: string;
    priority?:string;
    stateData?: boolean;
    step?: {}[];
}

export interface iProgress {
    task?: string;
    avatar?: string;
    name?:string;
    priority?: string;
    step?:{}[];
}