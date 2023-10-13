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
                style="display: flex; position: absolute; background: white; z-index: 86; height: 33px; color: rgba(55, 53, 47, 0.65); border-top: 1px solid rgb(233, 233, 231); box-shadow: white -3px 0px 0px 0px, rgb(233, 233, 231) 0px 1px 0px; min-width: calc((100% - 192px) - 0px); left: 0px; right: 0px;"
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

                <div style="display: inline-flex; margin: 0px;"></div>

                <div role="button"
                    tabindex="0"
                    class="xdoc-table-view-add-column"
                    style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; justify-content: flex-start; width: 32px;"
                ></div>

                <div role="button"
                    tabindex="0"
                    class="xdoc-table-view-add-column"
                    style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; justify-content: flex-start;  flex-grow: 1; width: 32px;"
                ></div>
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
    
                            <div class="xdoc-table-view-cell"
                                data-row-index="0"
                                data-col-index="0"
                                style="width: 280px; height: calc(100% + 1px); position: relative; border-right: 1px solid rgb(233, 233, 231);"
                            >
                                <div style="display: flex; overflow-x: hidden; height: 100%; width: 280px;">
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

                        <div style="display: flex; justify-content: flex-start; flex-grow: 1; width: 64px;"></div>
                        
                        <div class="xdoc-selectable-halo"
                            style="position: absolute; pointer-events: none; inset: 0; background: rgba(35, 131, 226, 0.14); z-index: 84; border-radius: 0px; opacity: 1; transition-property: opacity; transition-duration: 270ms; transition-timing-function: ease;"
                        ></div>
                    </div>
                </div>
            </div>


            <div style="width: 1712px;"></div>

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