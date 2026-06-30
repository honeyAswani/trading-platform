import React from 'react';
import Logo from "../assets/logo.svg";
import googlePlayBadge from "../assets/googlePlayBadge.svg"; 
import appstoreBadge from "../assets/appstoreBadge.svg";

function Footer() {
    const googlePlay =
  "https://play.google.com/store/apps/details?id=com.zerodha.kite3";

const appStore =
  "https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802";
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className="container border-top mt-7" >
            <div className="row mt-5">
                <div className="col">
                    <img  src={Logo} alt='Logo' style={{width: "50%"}}/>
                    <p className='text-muted'>
                        &copy; 2010 - 2026, Zerodha Broking Ltd.<br></br> All rights reserved.
                    </p>
                    <ul className='p-0 d-inline-block'>
                        <a href='https://x.com/zerodha' className='text-muted me-3'><i class="fa-brands fa-x-twitter fa-lg"></i></a>
                        <a href='https://www.facebook.com/zerodha.social' className="text-muted me-3"><i class="fa-brands fa-square-facebook fa-lg"></i></a>
                        <a href='https://www.instagram.com/zerodhaonline/' className='text-muted me-3'><i class="fa-brands fa-instagram fa-lg"></i></a>
                        <a href='https://www.linkedin.com/company/zerodha/' className='text-muted me-3'><i class="fa-brands fa-linkedin-in fa-lg"></i></a>
                        
                    </ul>
                    <ul className='border-top p-0 d-inline-block' >
                        <a href='https://www.youtube.com/@zerodhaonline' className='text-muted mt-3 me-3 d-inline-block'><i class="fa-brands fa-youtube fa-lg"></i></a>
                        <a href='https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g' className='text-muted mt-4 me-3'><i class="fa-brands fa-whatsapp fa-lg"></i></a>
                        <a href='https://t.me/zerodhain' className='text-muted mt-4 me-3'><i class="fa-brands fa-telegram fa-lg"></i></a>
                        <br></br>
                        <div  className="mt-5 gap-0" style={{display:"flex"}}>
                            <a href={googlePlay}>
                                <img src={googlePlayBadge}/>
                            </a>
                            <a href={appStore}>
                                <img src={appstoreBadge}
                                style={{ marginLeft: "50px" }}
                                />
                            </a>
                        </div>
                    </ul>
                </div>
                <div className="col">
                    <p className='fs-5'>Account</p>
                    
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black",lineHeight:"2.5"}}>Open demat account</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Minor demat account</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>NRI demat account</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>HUF demat account</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Commodity</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Dematerialisation</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Fund transfer</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>MTF</a>
                    <br />
                </div>
                <div className="col">
                    <p className='fs-5'>Support</p>
                    
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Contact us</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Support portal</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>How to file a complaint?</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Status of your complaints</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Bulletin</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Circular</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Z-Connect blog</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Downloads</a>
                    <br />
                </div>
                <div className="col">
                    <p className='fs-5'>Company</p>
                    
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>About</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Philosophy
                    </a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Press & media</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Careers</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Zerodha Cares (CSR)</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Zerodha.tech</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Open source</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Referral program</a>
                    <br />
                </div>
                <div className="col">
                    <p className='fs-5'>Quick links</p>
                    
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Upcoming IPOs</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Brokerage charges</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Market holidays</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Economic calendar</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Calculators</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Markets</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Sectors</a>
                    <br />
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Gift Nifty</a>
                    <br />
                </div>
            </div>
            <div className="mt-5 text-muted" style={{fontSize:"11px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ00002162 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-421-2019 Registered Address: Zerodha Broking Ltd., #152/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='' style={{textDecoration:"none"}}>complaints@zerodha.com </a>, for DP related to <a href='' style={{textDecoration:"none"}}>dp@zerodha.com </a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on <a href='' style={{textDecoration:"none"}}>SEBI SCORES </a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p><a href='' style={{textDecoration:"none"}}>Smart Online Dispute Resolution </a> |<a href='' style={{textDecoration:"none"}}> Grievances Redressal Mechanism</a></p>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 2) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p>India's largest broker based on networth as per NSE.<a href='' style={{textDecoration:"none"}}> NSE broker factsheet</a></p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='' style={{textDecoration:"none"}}>create a ticket here</a>.</p>

            <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0728) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

            <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ00002162) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
            </div>
            <ul className="list-unstyled d-flex flex-wrap justify-content-center text-muted " style={{ gap: "30px",textDecoration:"none",color:"black",fontSize:"13px"}} >
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>NSE</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>BSE</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>MCX</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>MSEI</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Terms & conditions</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Policies & procedures</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Privacy policy</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Disclosure</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>For investor's attention</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Investor charter</a>
                </li>
                <li>
                    <a href='' className="text-muted" style={{textDecoration:"none",color:"black", lineHeight:"2.5"}}>Sitemap</a>
                </li>
            </ul>
        </div>
        </footer>
     );
}

export default Footer;