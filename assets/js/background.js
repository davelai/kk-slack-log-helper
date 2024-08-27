chrome.webNavigation.onCompleted.addListener(
    (tab) => {
        markSlackLog(tab);
    }
);

function markSlackLog(tab) {
    chrome.scripting.executeScript({
        target: {tabId: tab.tabId},
        func: () => {
            let dangerColor = 'rgba(255, 69, 58, 0.3)';
            let alertColor = 'rgba(255, 183, 77, 0.3)';
            let safeColor = 'rgba(46, 204, 113, 0.3)';
            let remarkColor = 'rgba(255, 214, 10, 0.8)';
            let attentionColor = 'rgba(255, 99, 132, 0.8)';
            let exactMessage = {
                '----Tiqets PRICE UPDATED START---': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '非必要提示 log, 可以放到其他 channel',
                    excelId: 7,
                },
                '----UniveralStudio PRICE UPDATED START---': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '非必要提示 log, 可以放到其他 channel',
                    excelId: 7,
                },
                '----Redeam PRICE UPDATED START---': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '非必要提示 log, 可以放到其他 channel',
                    excelId: 7,
                },
                'GLX 主機連線異常，請洽 BD 相關人員': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '發生太多次, 無用訊息, 已回報',
                    excelId: 4,
                },
                '主機連線異常，請洽 BD 相關人員': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 4,
                },
                'Return value of App\\HttpClient\\SunWorldClient::callAPI() must be of the type array, null returned': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 21,
                },
                'None valid price rank': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 10,
                },
                'Booking Detail Not Found': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 11,
                },
                'TW is not allowed!': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 12,
                },
                '票卷狀態非可取消狀態，請洽 BD 相關人員': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 13,
                },
                'https://api.bemyguest.com.sg/v2/bookings__callAPI__The partner reference has already been taken.': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 15,
                },
                'https://api.bemyguest.com.sg/v2/bookings__callAPI__Arrival date is not available anymore. Please choose another one.': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 23,
                },
                'Your time is not available. Please select another time.': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 16,
                },
                'https://api.bemyguest.com.sg/v2/bookings__callAPI__[customer.firstName] First name is missing': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: '已回報',
                    excelId: 19,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (186340))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "booking_pkg_rule" where "package_oid" = 111302 limit 1)': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (187398))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (190466))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "booking_pkg_rule" where "package_oid" = 555383 limit 1)': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (190773))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (187374))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (187699))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (187393))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (192001))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (187373))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
                'SQLSTATE[08006] [7] timeout expired (SQL: select * from "product_syncs" where "prod_oid" in (193737))': {
                    backgroundColor: safeColor,
                    markTextColor: remarkColor,
                    markTextContent: 'Tabelog long sql 造成 DB timeout',
                    excelId: 24,
                },
            }

            function markInfo(text) {
                if (exactMessage[text]) {
                    return exactMessage[text];
                }

                if (text.includes('workflow') && text.includes('422 Unprocessable Content')) {
                    return {
                        backgroundColor: alertColor,
                        markTextColor: remarkColor,
                        markTextContent: '已回報需優化, 但是可能未來還是會出現這個 log',
                        excelId: 6,
                    };
                }

                if (text.startsWith("https://api.bemyguest.com.sg/v2/product-types")) {
                    return {
                        backgroundColor: safeColor,
                        markTextColor: remarkColor,
                        markTextContent: '已回報需優化',
                        excelId: 8,
                    };
                }

                if (text.startsWith('error.package.item.not.published')) {
                    return {
                        backgroundColor: safeColor,
                        markTextColor: remarkColor,
                        markTextContent: '已回報',
                        excelId: 17,
                    };
                }

                if (text.startsWith('cancel error')) {
                    return {
                        backgroundColor: safeColor,
                        markTextColor: remarkColor,
                        markTextContent: '已回報',
                        excelId: 14,
                    };
                }

                if (text.startsWith('---FAILED---')) {
                    if (text.includes('Invalid argument supplied for foreach')) {
                        return {
                            backgroundColor: alertColor,
                            markTextColor: remarkColor,
                            markTextContent: '已回報需優化',
                            excelId: 18,
                        };
                    }

                    if (text.includes('同套餐，不同票種，日期價格數量不同，無法建立日曆規則')) {
                        return {
                            backgroundColor: alertColor,
                            markTextColor: remarkColor,
                            markTextContent: '已回報需優化',
                            excelId: 20,
                        };
                    }

                    if (text.includes('calendar-rules') &&  text.includes('resulted in a 422 Unprocessable Content')) {
                        return {
                            backgroundColor: alertColor,
                            markTextColor: remarkColor,
                            markTextContent: '已回報需優化',
                            excelId: 21,
                        };
                    }
                }

                console.log(text);
                return {
                    backgroundColor: dangerColor,
                    markTextColor: remarkColor,
                    markTextContent: '無回報的錯誤, 請注意'
                }
            }

            function checkAndUpdateItems() {
                const virtualListItems = document.querySelectorAll('.c-message_kit__hover');

                virtualListItems.forEach(item => {
                    if (item.getAttribute('runMark') === 'yes') {
                        return;
                    }

                    item.setAttribute('runMark', 'yes');
                    const richTextSection = item.querySelector('div.p-rich_text_section');
                    if (richTextSection) {
                        let mark = markInfo(richTextSection.textContent);
                        console.log(mark);
                        item.style.backgroundColor = mark.backgroundColor;

                        const newText = document.createElement('span');
                        newText.style.color = mark.markTextColor;
                        newText.textContent = mark.markTextContent;

                        const lineBreak = document.createElement('br');
                        richTextSection.appendChild(lineBreak);
                        richTextSection.appendChild(newText);
                        if (mark.excelId) {
                            const excelId = document.createElement('span');
                            excelId.style.color = attentionColor;
                            excelId.textContent = `excel row id: ${mark.excelId}`;
                            richTextSection.appendChild(document.createElement('br'));
                            richTextSection.appendChild(excelId);
                            richTextSection.appendChild(document.createElement('br'));
                        }
                    }
                });
            }

            if (document.title.includes('it-log-production-kkday-b2b-api')) {
                const targetNode = document.querySelector('div.c-virtual_list__scroll_container[role="list"]');
                let targetNodeChildrenCount = targetNode.children.length;

                const observer = new MutationObserver(mutations => {
                    mutations.forEach(mutation => {
                        if (mutation.type === 'childList') {
                            if (targetNode.children.length !== targetNodeChildrenCount) {
                                targetNodeChildrenCount = targetNode.children.length;
                                checkAndUpdateItems();
                            }
                        }
                    });
                });

                const config = {childList: true, subtree: true};
                observer.observe(targetNode, config);
                checkAndUpdateItems();
            }
        },
        args: []
    }, () => {
    });
}