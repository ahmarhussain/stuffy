export type Contracts = {
    image: string,
    name: string,
    email: string,
    phone: string,
    refere: boolean,
    progress: {
        attestation: boolean,
        covax_training: boolean,
        covax_account: boolean,
        epic_training: boolean
    },
    supervisionChances: number,
    policeCheck: boolean,
    resume: boolean,
    note: string,
    dateJoined: Date,
    lastActivity: Date,
    quizTaken: number,
    maxScore: number,
}

export type MappedContracts = {
    image: string,
    name: string,
    email: string,
    phone: string,
    refere: boolean,
    isActive: boolean,
    progress: {key: string, value: boolean}[],
    supervisionChances: number,
    policeCheck: boolean,
    resume: boolean,
    note: string,
    dateJoined: string,
    lastActivity: string,
    quizTaken: number,
    maxScore: number,
}

export type HeaderFilters = {
    searchText: string,
    showCompletedOnly: boolean
};