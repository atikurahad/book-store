import React, { Component } from 'react'
import { Container, Row,Col } from "react-bootstrap";

class SubMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className ='sub-menu-wrapper'>
            <Container fluid className="custom-container">
                <Row className="no-gutters">
                    <Col className="sub-menu-column">
                                <ul className="sub-menu bangla-menu">
                                    <li>
                                        <a id="js--authors" href="/book/authors?ref=sm_p0">লেখক <i className="align-middle ion-chevron-down"></i> </a>
                                    </li>

                                    <li>
                                        <a id="js--categories" href="/book/categories?ref=sm_p1">বিষয় <i className="align-middle ion-chevron-up"></i> </a>
                                    </li>

                                    <li>
                                        <a id="js--publishers" href="/book/publishers?ref=sm_p2">প্রকাশনী<i className="align-middle ion-chevron-down"></i> </a>
                                    </li>
                                    <li className="sub-menu-highlight-link"><a href="/stock?ref=stock_home">স্টকের প্রোডাক্ট সমূহ</a></li>
                                    <li><a href="/islamic?ref=islam_home">ইসলামি বই</a></li>
                                    <li className="sub-menu-another-highlight-link"><a href="/boimela?ref=mela_20">বইমেলা ২০২০</a></li>
                                    <li><a href="/list/42757/rokomari-bestseller?ref=sm_p8">বেস্টসেলার বই </a></li>
                                    <li className="position-relative"><a href="/book/category/2570/primary-teacher-entrance?ref=sm_p6"><i className="ion-university"></i> প্রাথমিক শিক্ষক নিয়োগ</a></li>
                                    <li><a href="/book/category/80/রকমারি-কালেকশন?ref=sm_p9">রকমারি প্যাকেজ</a></li>
                                    <li><a href="/list/35631/বাংলাদেশের-প্রথম-সাইন্সকিট-,যা-আপনার-সন্তানের-সেরা-উপহার?utm_source=Website&amp;utm_medium=Website&amp;utm_campaign=Rokomari_Submenu_Bigganbaksho?ref=sm_p7">বিজ্ঞানবাক্স </a></li>
                                    <li><a href="/book/category/14?ref=sm_p3">ফ্রিল্যান্সিং/প্রোগ্রামিং</a></li>
                                    <li><a href="/westbangla?ref=sm_p10">পশ্চিমবঙ্গের বই</a></li>
                                    <li><a href="/book/category/1983?ref=sm_p01">অতিরিক্ত ছাড়ের বই</a></li>
                                </ul>

                                <ul id="js--categories-menu" className="sub-menu__dropdown-menu show">
                                    <div className="d-flex justify-content-between">
                                        <div className="bangla-menu">
                                            <li><a href="/book/category/80/rokomari-collection?sort=SOLD_COUNT_DESC&amp;priceRange=91to46560&amp;discountRange=0to65?ref=sm_p00"> রকমারি প্যাকেজ</a></li>
                                            <li><a href="/book/category/403?ref=sm_p11"> ইংরেজি ভাষার বই </a></li>
                                            <li><a href="/onubad?ref=mm_p2"> অনুবাদ  </a></li>
                                            <li><a href="/book/category/31?ref=mm_p8"> গণিত</a></li>
                                            
                                            <li><a href="/book/category/9?ref=mm_p3"> জীবনী, স্মৃতিচারণ ও সাক্ষাৎকার  </a></li>
                                            <li><a href="/book/category/11?ref=mm_p4"> শিশু-কিশোর বই </a></li>
                                            <li><a href="/islamic?ref=mm_p5"> ইসলামি  </a></li>
                                            <li><a href="/book/category/404?ref=mm_p6"> রাজনীতি  </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/category/32?ref=mm_p7"> আত্ম-উন্নয়ন ও মেডিটেশন </a></li>
                                            <li><a href="/book/category/24?ref=mm_p9"> মুক্তিযুদ্ধ </a></li>
                                            <li><a href="/book/category/411?ref=mm_p10"> ভর্তি, নিয়োগ ও প্রস্তুতি পরীক্ষা </a></li>
                                            <li><a href="/uponnas?ref=mm_p11"> উপন্যাস </a></li>
                                            <li><a href="/book/category/408?ref=mm_p12"> রহস্য, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার  </a></li>
                                            <li><a href="/book/category/90?ref=mm_p13"> ইঞ্জিনিয়ারিং </a></li>
                                            <li><a href="/book/category/19?ref=mm_p14"> ইতিহাস ও ঐতিহ্য </a></li>
                                            <li><a href="/westbangla?ref=mm_p15"> পশ্চিমবঙ্গের বই </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/category/1905?ref=mm_p16"> পুরস্কারপ্রাপ্ত বই </a></li>
                                            <li><a href="/book/category/412?ref=mm_p17"> স্কুল ও কলেজ বই </a></li>
                                            <li><a href="/book/category/10?ref=mm_p18"> ব্যবসা, বিনিয়োগ ও অর্থনীতি </a></li>
                                            <li><a href="/book/category/410?ref=mm_p19"> সায়েন্স ফিকশন </a></li>
                                            <li><a href="/book/category/41?ref=mm_p20"> আইন ও বিচার </a></li>
                                            <li><a href="/book/category/13?ref=mm_p21"> কমিকস, নকশা ও ছবির গল্প </a></li>
                                            <li><a href="/book/category/36?ref=mm_p22"> ভ্রমণ ও প্রবাস </a></li>
                                            <li><a href="/book/category/413?ref=mm_p23"> ইউনিভার্সিটি </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/category/23?ref=mm_p24"> ভাষা ও অভিধান </a></li>
                                            <li><a href="/book/category/7?ref=mm_p25"> ড্রয়িং, পেইন্টিং ডিজাইন ও ফটোগ্রাফি </a></li>
                                            <li><a href="/book/category/265?ref=mm_p26"> রকমারি নির্বাচিত বই  </a></li>
                                            <li><a href="/book/category/18?ref=mm_p27"> স্বাস্থ্য, পরিচর্যা ও রোগ নিরাময়  </a></li>
                                            <li><a href="/book/category/91?ref=mm_p28"> মেডিকেল </a></li>
                                            <li><a href="/book/category/21?ref=mm_p29"> প্রফেশনাল, জার্নাল ও রেফারেন্স </a></li>
                                            <li><a href="/book/category/6?ref=mm_p30"> কৃষি ও কৃষক </a></li>
                                            <a className="dropdown-menu__see-more" href="/book/categories?ref=mm_va"> See More... </a>
                                        </div>

                                    </div>
                                </ul>

                                <ul id="js--authors-menu" className="sub-menu__dropdown-menu">
                                    <div className="d-flex justify-content-between">
                                        <div className="bangla-menu">
                                            <li><a href="/book/author/1?ref=mm_p0"> হুমায়ূন আহমেদ </a></li>
                                            <li><a href="/book/author/93?ref=mm_p1"> মুহম্মদ জাফর ইকবাল </a></li>
                                            <li><a href="/book/author/4195?ref=mm_p2"> সমরেশ মজুমদার   </a></li>
                                            <li><a href="/book/author/930?ref=mm_p3"> রবীন্দ্রনাথ ঠাকুর  </a></li>
                                            <li><a href="/book/author/846?ref=mm_p4"> সুনীল গঙ্গোপাধ্যায় </a></li>
                                            <li><a href="/book/author/50?ref=mm_p5"> আনিসুল হক  </a></li>
                                            <li><a href="/book/author/2546?ref=mm_p6"> শীর্ষেন্দু মুখোপাধ্যায়  </a></li>
                                            <li><a href="/book/author/2444?ref=mm_p7"> সত্যজিৎ রায় </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/author/2254?ref=mm_p8"> আহমদ ছফা </a></li>
                                            <li><a href="/book/author/7245?ref=mm_p9"> বিভূতিভূষণ বন্দ্যোপাধ্যায় </a></li>
                                            <li><a href="/book/author/7054?ref=mm_p10"> সৈয়দ শামসুল হক </a></li>
                                            <li><a href="/book/author/5717?ref=mm_p11"> সাদাত হোসাইন  </a></li>
                                            <li><a href="/book/author/4207?ref=mm_p12"> তামিম শাহরিয়ার সুবিন  </a></li>
                                            <li><a href="/book/author/1247?ref=mm_p13"> কাজী নজরুল ইসলাম </a></li>
                                            <li><a href="/book/author/975?ref=mm_p14"> হুমায়ুন আজাদ </a></li>
                                            <li><a href="/book/author/3182?ref=mm_p15"> জহির রায়হান </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/author/8549?ref=mm_p16"> ড্যান ব্রাউন </a></li>
                                            <li><a href="/book/author/15240?ref=mm_p17"> চেতন ভগত </a></li>
                                            <li><a href="/book/author/4378?ref=mm_p18"> রকিব হাসান </a></li>
                                            <li><a href="/book/author/3298?ref=mm_p19"> সৈয়দ মুজতবা আলী </a></li>
                                            <li><a href="/book/author/610?ref=mm_p20"> মানিক বন্দ্যোপাধ্যায় </a></li>
                                            <li><a href="/book/author/1224?ref=mm_p21"> বঙ্কিমচন্দ্র চট্টোপাধ্যায় </a></li>
                                            <li><a href="/book/author/2496?ref=mm_p22"> আখতারুজ্জামান ইলিয়াস </a></li>
                                            <li><a href="/book/author/25?ref=mm_p23"> ইমদাদুল হক মিলন </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/author/318?ref=mm_p24"> সেলিনা হোসেন </a></li>
                                            <li><a href="/book/author/4279?ref=mm_p25"> স্টিফেন কিং  </a></li>
                                            <li><a href="/book/author/2559?ref=mm_p26"> জে. কে. রাওলিং  </a></li>
                                            <li><a href="/book/author/5184?ref=mm_p27"> কাজী আনোয়ার হোসেন</a></li>
                                            <li><a href="/book/author/171?ref=mm_p28"> সুমন্ত আসলাম </a></li>
                                            <li><a href="/book/author/2210?ref=mm_p29"> পাওলো কোয়েলহো </a></li>
                                            <li><a href="/book/author/1165?ref=mm_p30"> শওকত ওসমান </a></li>
                                            <a className="dropdown-menu__see-more" href="/book/authors?ref=mm_va"> See More... </a>
                                        </div>

                                    </div>
                                </ul>

                                <ul id="js--publishers-menu" className="sub-menu__dropdown-menu">
                                    <div className="d-flex justify-content-between">

                                        <div className="bangla-menu">
                                            <li><a href="/book/publisher/2445?ref=mm_p0"> জয়কলি পাবলিকেশন্স লিঃ </a></li>
                                            <li><a href="/book/publisher/769?ref=mm_p1"> সাইফুর’স </a></li>
                                            <li><a href="/book/publisher/768?ref=mm_p2"> এমপি থ্রি পাবলিকেশন্স </a></li>
                                            <li><a href="/book/publisher/2197?ref=mm_p3"> অক্ষরপত্র প্রকাশনী </a></li>
                                            <li><a href="/book/publisher/8823?ref=mm_p4"> দি রয়েল সায়েন্টিফিক পাবলিকেশন্স </a></li>
                                            <li><a href="/book/publisher/369?ref=mm_p5"> সেবা প্রকাশনী </a></li>
                                            <li><a href="/book/publisher/38?ref=mm_p6"> প্রথমা প্রকাশন </a></li>
                                            <li><a href="/book/publisher/8?ref=mm_p7"> বাংলা একাডেমি   </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/publisher/175?ref=mm_p8"> ঐতিহ্য   </a></li>
                                            <li><a href="/book/publisher/586?ref=mm_p9"> ইসলামিক ফাউন্ডেশন </a></li>
                                            <li><a href="/book/publisher/572?ref=mm_p10"> বাতিঘর প্রকাশনী </a></li>
                                            <li><a href="/book/publisher/51?ref=mm_p11"> বিশ্বসাহিত্য কেন্দ্র </a></li>
                                            <li><a href="/book/publisher/1?ref=mm_p12"> অন্যপ্রকাশ </a></li>
                                            <li><a href="/book/publisher/123?ref=mm_p13"> আনন্দ পাবলিশার্স (ভারত) </a></li>
                                            <li><a href="/book/publisher/91?ref=mm_p14"> আদর্শ </a></li>
                                            <li><a href="/book/publisher/606?ref=mm_p15"> দি ইউনিভার্সিটি প্রেস লিমিটেড(ইউ পি এল) </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/publisher/642?ref=mm_p16"> দে’জ পাবলিশিং (ভারত) </a></li>
                                            <li><a href="/book/publisher/391?ref=mm_p17"> পাঞ্জেরী পাবলিকেশন </a></li>
                                            <li><a href="/book/publisher/21?ref=mm_p18"> সময় প্রকাশন </a></li>
                                            <li><a href="/book/publisher/58?ref=mm_p19"> তাম্রলিপি </a></li>
                                            <li><a href="/book/publisher/16?ref=mm_p20"> জ্ঞানকোষ প্রকাশনী </a></li>
                                            <li><a href="/book/publisher/7?ref=mm_p21"> আগামী প্রকাশনী </a></li>
                                            <li><a href="/book/publisher/414?ref=mm_p22"> পাঠক সমাবেশ </a></li>
                                            <li><a href="/book/publisher/781?ref=mm_p23"> বিসিএস প্রকাশন </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/publisher/923?ref=mm_p24"> তাওহীদ পাবলিকেশন্স </a></li>
                                            <li><a href="/book/publisher/609?ref=mm_p25"> মিত্র ও ঘোষ পাবলিশার্স প্রাঃ লিঃ (ভারত) </a></li>
                                            <li><a href="/book/publisher/925?ref=mm_p26"> মাকতাবাতুল আযহার </a></li>
                                            <li><a href="/book/publisher/2?ref=mm_p27"> অনন্যা </a></li>
                                            <li><a href="/book/publisher/226?ref=mm_p28"> সিসটেক পাবলিকেশন্স </a></li>
                                            <li><a href="/book/publisher/39?ref=mm_p29"> সন্দেশ </a></li>
                                            <li><a href="/book/publisher/1602?ref=mm_p30"> ঢাকা কমিক্স  </a></li>
                                            <li><a href="/book/publisher/813?ref=mm_p31"> হারপারকলিন্স পাবলিশার্স  </a></li>
                                        </div>

                                        <div className="bangla-menu">
                                            <li><a href="/book/publisher/87?ref=mm_p32"> বিজ্ঞান একাডেমী</a></li>
                                            <li><a href="/book/publisher/679?ref=mm_p33"> এমদাদিয়া লাইব্রেরী </a></li>
                                            <li><a href="/book/publisher/1055?ref=mm_p34"> পিয়ারসন </a></li>
                                            <li><a href="/book/publisher/2187?ref=mm_p35"> লেকচার </a></li>
                                            <a className="dropdown-menu__see-more" href="/book/publishers?ref=mm_va"> See More... </a>
                                        </div>

                                    </div>
                                </ul>
                    </Col>
                </Row>
            </Container>
            </div>
         );
    }
}
 
export default SubMenu;