<template>
    <div class="xdoc-table-view"
        style="position: relative; float: left; min-width: 100%; user-select: none; font-variant-numeric: lining-nums tabular-nums; padding-bottom: 180px; padding-left: 96px; padding-right: 96px;"
    >
        <!-- data-block-id = block id  of collection -->
        <div data-block-id=""
            class="xdoc-selectable xdoc-collection_view-block"
            style="position: relative;"
        >
            <div class="xdoc-table-view-header-row"
                style="display: flex; position: absolute; background: white; z-index: 86; height: 33px; color: rgba(55, 53, 47, 0.65); box-shadow: white -3px 0px 0px, rgb(233, 233, 231) 0px 1px 0px; border-top: 1px solid rgb(233, 233, 231); min-width: calc((100% - 192px) - 0px); left: 0px; right: 0px;"
            >
                <div style="position: sticky; left: 0px; z-index: 83;">
                    <div style="background: white; border-bottom: rgb(233, 233, 231); height: 100%; opacity: 0; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                        <label style="height: 100%; margin-right: -8px; align-items: flex-start; justify-content: center; display: flex; cursor: pointer; z-index: 1; opacity: 0; padding-left: 0px; padding-right: 0px; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                            <div style="width: 32px; height: 31px; display: flex; justify-content: center; align-items: center; padding-right: 0px;">
                                <input type="checkbox"
                                    style="width: 14px; height: 14px; cursor: pointer; position: relative; right: 2px;"
                                >
                            </div>
                        </label>
                        
                        <div style="position: absolute; top: 0px; right: -3px; width: 3px; height: 100%; background: linear-gradient(to right, rgba(135, 131, 120, 0.15), rgba(135, 131, 120, 0.1), transparent); opacity: 0; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;"></div>
                    </div>
                </div>

                <div style="display: inline-flex; margin: 0px;">
                    <div 
                        v-for="(column) in collection_columns" :key="column.id"
                        style="display: flex; flex-direction: row;"
                    >
                        <div style="display: flex; position: relative;">
                            <div class="xdoc-table-view-header-cell"
                                style="display: flex; flex-shrink: 0; overflow: hidden; font-size: 14px; padding: 0px; width: 200px; border-right: 1px solid rgb(233, 233, 231);"
                            >
                                <div role="button"
                                    tabindex="0"
                                    style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; width: 100%; height: 100%; padding-left: 8px; padding-right: 8px;"
                                >
                                    <div style="display: flex; align-items: center; line-height: 120%; min-width: 0px; font-size: 14px;">
                                        <div style="margin-right: 6px;">
                                            <svg role="graphics-symbol" viewBox="0 0 16 16" class="typesTitle" style="width: 16px; height: 16px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path></svg>
                                        </div>

                                        <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                            {{ column.name }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style="position: absolute; right: 0px; width: 0px; flex-grow: 0; z-index: 1;"></div>
                        </div>
                    </div>
                </div>

                <div role="button"
                    tabindex="0"
                    class="xdoc-table-view-add-column"
                    style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; justify-content: flex-start; width: 32px;"
                >
                    <div style="display: flex; width: 32px; height: 100%; align-items: center; justify-content: center;"></div>
                </div>

                <div role="button"
                    tabindex="0"
                    class="xdoc-table-view-add-column"
                    style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; justify-content: flex-start;  flex-grow: 1; width: 32px;"
                >
                    <div style="display: flex; width: 32px; height: 100%; align-items: center; justify-content: center;"></div>
                </div>
            </div>

            <div style="height: 34px;"></div>
            
            <div style="position: relative; min-width: calc((100% - 192px) - 0px);">
                <div class="xdoc-table-view-frozen-column-repositioner"
                    style="z-index: 87; display: flex; position: absolute; width: 100%; height: 100%; cursor: grab; pointer-events: none;"
                >
                    <div style="display: flex; width: calc(100% - 64px); height: 100%;">
                        <div style="position: sticky; left: 0px; height: 100%;">
                            <div style="position: absolute; left: 23px; z-index: 30; height: 100%; opacity: 0; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                                <div style="position: absolute; left: -3px; top: 0px; width: 8px; pointer-events: auto; cursor: grab; height: 100%;"></div>
                                <div style="position: absolute; top: 0px; width: 1px; height: 100%; background: rgb(132, 177, 206); opacity: 0;"></div>
                                <div style="position: absolute; left: -1px; top: 0px; width: 2px; height: 100%; background: rgb(199, 198, 196);"></div>
                                <div style="position: absolute; left: -2px; top: 7.6px; width: 4px; height: 28px; background: rgb(91, 151, 189); border-radius: 3px;"></div>
                            </div>
                        </div>

                        <div style="position: absolute; top: 0px; width: 1px; height: 100%; background: rgb(132, 177, 206); left: 23px; opacity: 0;"></div>
                    </div>
                </div>

                <div data-block-id="" 
                    class="xdoc-selectable xdoc-page-block xdoc-collection-item"
                    style="display: flex; height: calc(100% + 2px); border-bottom: 1px solid rgb(233, 233, 231);"
                >
                    <div class="xdoc-table-view-row"
                        style="display: flex;"
                    >
                        <div style="display: flex;">   
                            <div style="position: sticky; left: 0px; z-index: 83; display: flex;">
                                <div style="display: flex; opacity: 1; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                                    <div style="background: white; border-bottom: rgb(233, 233, 231); height: 100%; opacity: 0; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                                        <label style="height: 100%; margin-right: -8px; align-items: flex-start; justify-content: center; display: flex; cursor: pointer; z-index: 1; opacity: 0; padding-left: 0px; padding-right: 0px; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;">
                                            <div style="height: 31px; width: 32px; display: flex; justify-content: center; align-items: center; padding-right: 0px;">
                                                <input type="checkbox"
                                                    style="width: 14px; height: 14px; cursor: pointer; position: relative; right: 2px;"
                                                >
                                            </div>
                                        </label>
    
                                        <div style="position: absolute; top: 0px; right: -3px; width: 3px; height: 100%; background: linear-gradient(to right, rgba(135, 131, 120, 0.15), rgba(135, 131, 120, 0.1), transparent); opacity: 0; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;"></div>
                                    </div>
                                </div>
                            </div>
    
                            <div v-for="i in 8" :key="i" class="xdoc-table-view-cell"
                                data-row-index="0"
                                data-col-index="0"
                                style="width: 200px; height: calc(100% + 1px); position: relative; border-right: 1px solid rgb(233, 233, 231);"
                            >
                                <div style="display: flex; overflow-x: hidden; height: 100%; width: 200px;">
                                    <div role="button"
                                        tabindex="0"
                                        data-testid="property-value"
                                        style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; position: relative; display: block; font-size: 14px; overflow: hidden; width: 252px; border-right: none; white-space: nowrap; height: 32px; min-height: 32px; padding: 5px 8px;"
                                    >
                                        <span style="line-height: 1.5; white-space: nowrap; word-break: normal; display: inline; font-weight: 500; background-image: linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.1) 100%); background-repeat: repeat-x; background-position: 0px 100%; background-size: 100% 1px;">
                                            my tasks screen
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="xdoc-selectable-halo"
                            style="position: absolute; pointer-events: none; inset: 0; background: rgba(35, 131, 226, 0.14); z-index: 84; border-radius: 0px; opacity: 1; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;"
                        ></div>
                    </div>

                    <div style="display: flex; justify-content: flex-start; flex-grow: 1; width: 64px;"></div>
                </div>
            </div>


            <div style="width: 1668px;"></div>

            <div role="button"
                tabindex="0"
                class="xdoc-table-view-add-row"
                style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; height: 32px; width: 100%; padding-left: 8px; font-size: 14px; line-height: 20px; background: white; left: 0px; right: 0px;"
            ></div>

            <div contenteditable="false"
                class="pseudoSelection"
                data-content-editable-void="true"
                style="user-select: none; --pseudoSelection--background: transparent; display: flex; position: absolute; background: white; z-index: 83; font-size: 14px; height: 43px; min-width: 100%; clip-path: polygon(0% -20%, 100% -20%, 100% 100%, 0% 100%); left: 0px; border-top: 1px solid rgb(233, 233, 231); transform: translate3d(0px, -288px, 0px);"
            ></div>

            <div style="height: 32px;"></div>
        </div>

        <div></div>
    </div>
</template>

<script setup>
const collection_columns = [
    {id: 1, name: "task name"},
    {id: 2, name: "description"},
    {id: 3, name: "deadline"},
    {id: 4, name: "assigned"},
    {id: 5, name: "status"},
    {id: 6, name: "status"},
    {id: 7, name: "status"},
    {id: 8, name: "status"}
]
</script>