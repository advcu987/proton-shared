export enum CALENDAR_CARD_TYPE {
    ENCRYPTED_AND_SIGNED = 3,
    SIGNED = 2,
    CLEAR = 1
}

export enum CALENDAR_PERMISSIONS {
    OWNER = 32,
    ADMIN = 16,
    WRITE = 8,
    READ_MEMBER_LIST = 4,
    READ = 2,
    AVAILABILITY = 1
}

export enum CALENDAR_FLAGS {
    INACTIVE = 0,
    ACTIVE = 1,
    UPDATE_PASSPHRASE = 2,
    RESET_NEEDED = 4,
    INCOMPLETE_SETUP = 8,
    LOST_ACCESS = 16,
    SELF_DISABLED = 32,
    SUPER_OWNER_DISABLED = 64
}