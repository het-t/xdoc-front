export type SearchProps = {
    collectionId: string,
    filters: {
        ancestors: Array<string>,
        createdBy: Array<string>,
        createdTime: Object,
        exitedTime: Object,
        excludeTemplates: boolean,
        inTeams: Array<string>,
        includePublicPagesWithoutExplicitAccess: boolean,
        isDeletedOnly: boolean,
        lastEditedTime: Object,
        navigableBlockContentOnly: boolean,
        requiredEditPermission: boolean
    },
    ignoresHighlight: boolean,
    limit: number,
    query: string,
    recentPagesForBoosting: Array<{
        visitedAt: string,
        pageId: string
    }>,
    sort: string,
    source: string,
    spaceId: string,
    type: string
}