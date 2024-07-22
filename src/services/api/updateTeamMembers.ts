import makePostReq from "./makePostReq"

export const updateTeamMembers = function(args: {
    spaceId: string,
    teamId: string,
    existingMembersOrGuestsToRemove?: Array<IMembership>,
    newMembersOrGuestsToAdd?: Array<IMembership>
}) {
    return makePostReq("/api/v1/updateTeamMembers", args);
}

interface IMembership {
    entity_type: "user",
    type: "member" | "owner",
    user_id: string
}