import React from "react";
import s from "./BountyDetails.module.scss";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BountySubmission from "../BountySubmission/BountySubmission";

// **SOON** is a groundbreaking Solana Virtual Machine (SVM) rollup that empowers developers to fully leverage its **Decoupled SVM framework**. Designed for scalability and high-performance, SOON allows developers to build applications across any Layer 1 ecosystem, prioritizing **efficient parallel processing** and an **enhanced developer experience**.

// SOON is supported by some of the most respected angel investors in the blockchain space, including:

// - **Anatoly “Toly” Yakovenko** – Co-Founder of Solana Labs
// - **Lily Liu** – President of Solana Foundation & Founder of Anagram Ventures
// - **Jonathan King** – Principal at Coinbase Ventures
// - **Mustafa Al-Bassam** – Co-Founder of Celestia Labs
// - **Amrit Kumar** – Co-Founder of AltLayer
// - **Prabal Banerjee** – Co-Founder of Avail

// ...and other prominent builders and visionaries.

// ---

// # **Genesis Hackathon**

// The **SOON Genesis Hackathon** is a global competition designed to foster innovation and collaboration within the SVM ecosystem. Whether you’re an experienced developer or a newcomer, this hackathon offers a unique opportunity to create groundbreaking projects, connect with a diverse community, and compete for **exciting prizes**.

// ---

// ## **Prizes**

// - **Top 5 Grand Prizes**: $34,000
// - **DeFi Track**: $2,000
// - **DePin Track**: $2,000
// - **Special Track**: $2,000

// ---

// ## **Focus Areas**

// Participants are encouraged to build impactful, high-quality projects utilizing SOON's Decoupled SVM framework. Priority areas include:

// - **Scalable DeFi and PayFi applications** for financial use cases.
// - **Real-world adoption projects** in DePin (Decentralized Physical Infrastructure Networks).
// - **Innovative solutions** that emphasize usability and push the boundaries of the SVM ecosystem.

// The goal is to achieve significant technical advancements while creating long-term value for the ecosystem.

// ---

// ## **Key Dates**

// - **October 30 – November 27**: Teaming & Building Phase
// - **November 27**: Project Submission Deadline
// - **November 30 – December 7**: Judging, Evaluation & Online Demo Day
// - **December 8**: Finalists Announcement

// ---

// ## **Eligibility Criteria**

// - All code must be deployed on the **SOON DevNet/TestNet**.
// - New codebases are preferred; pre-existing codebases must show significant updates during the hackathon.
// - Projects can be public or private; private projects must grant access to rahul@soo.network for validation.
// - Teams can consist of up to four members. Individual participation is welcome.
// - Only one team member should submit the project to Superteam Earn. Avoid duplicate submissions.

// ---

// ## **Judging Criteria**

// Submissions will be evaluated based on:

// 1. **Innovation (25 points)**: Originality and creative application of technology.
// 2. **Potential Impact (25 points)**: Market relevance and ecosystem significance.
// 3. **Technical Implementation (20 points)**: Feasibility and efficient use of blockchain.
// 4. **Usability & Design (15 points)**: Accessibility and user experience.
// 5. **Presentation (15 points)**: Clarity and feasibility of the business plan.

// ---

// ## **Potential Project Ideas**

// ### **1. Decentralized Exchange (DEX)**

// Create a DEX for token swaps on the SOON network with features like:

// - Low slippage
// - Liquidity pools
// - Yield farming & staking
// - **Bonus**: Advanced options like limit orders, perpetual contracts, or cross-chain swaps

// ### **2. Token Launchpad**

// Build a platform for launching tokens via Initial DEX Offerings (IDO) with features like:

// - Token vesting
// - Whitelist management
// - Multi-round funding

// ### **3. Lending & Borrowing Protocol**

// Develop a decentralized protocol with features like:

// - Interest on deposits
// - Collateral-based borrowing
// - Flash loans & liquidation mechanisms

// ### **4. Yield Aggregator**

// Create a yield aggregator to maximize returns across DeFi protocols on SOON, focusing on strategies that optimize returns with minimal risk.

// ### **5. DePIN Projects**

// - **Decentralized Telecom Network**: Build a network for communication services (internet, messaging) using decentralized nodes.
// - **Decentralized IoT Network**: Create a secure IoT ecosystem with token rewards for device operators.
// - **Decentralized Energy Grid**: Develop a platform for energy production and distribution, with tokenized energy credits.

// ### **6. Social Token Platform**

// Allow creators and communities to issue social tokens for exclusive perks or content.

// ### **7. NFT Marketplace**

// Build a marketplace for minting, buying, and selling NFTs with features like:

// - Auctions
// - Royalties for creators
// - Support for multiple NFT standards

// ### **8. Developer Tooling**

// - **Blockchain Explorer**: Design an explorer tailored to SOON, offering transaction insights and validation.
// `;
const markdownContent = `# About SOON

**SOON**, a cutting-edge **Solana Virtual Machine (SVM) rollup**, is challenging developers to harness the full power of its **Decoupled SVM framework** to build scalable, high-performance applications across any Layer 1 ecosystem. SOON is optimized for high-efficiency parallel processing and an enhanced developer experience, aiming to redefine what’s possible within the SVM ecosystem.

SOON is backed by the most well-respected angel investors in the space, including:

- **Toly, Anatoly “Toly” Yakovenko**, Co-Founder of Solana Labs  
- **Lily Liu**, President of Solana Foundation & Founder of Anagram Ventures  
- **Jonathan King**, Principal at Coinbase Ventures  
- **Mustafa Al-Bassam**, Co-Founder of Celestia Labs  
- **Amrit Kumar**, Co-Founder of AltLayer  
- **Prabal Banerjee**, Co-Founder of Avail  
- Other prominent builders  

---

## Genesis Hackathon

The **SOON Genesis Hackathon** is a global competition to drive innovation and collaboration within the SVM ecosystem. Whether you're an experienced developer or a new creative talent, this event offers you the platform to develop groundbreaking projects, connect with a diverse community, and compete for exciting prizes.

### Prizes

- **Top 5 Grand Prize:** $34,000  
- **DeFi Track:** $2,000  
- **DePin Track:** $2,000  
- **Special Track:** $2,000  

Developers are tasked with creating **high-quality, impactful projects** that leverage SOON's **Decoupled SVM framework**. Priority areas include:

1. Efficient, scalable DeFi and PayFi applications for financial use cases.  
2. Projects with real-world adoption potential, particularly in DePin (Decentralized Physical Infrastructure Networks).  
3. Solutions that emphasize innovation and usability to push the boundaries of the SVM ecosystem.  

Participants should focus on achieving significant technical advancement while crafting applications with lasting value for the ecosystem.

Check out our [Discord](https://discord.com/invite/soon-svm) to connect with other participants or get help.

---

### Prize Pool

- **1st Prize:** $11,000  
- **2nd Prize:** $8,000  
- **3rd Prize:** $6,000  
- **4th Prize:** $5,000  
- **5th Prize:** $4,000  
- **DeFi Track:** $2,000  
- **DePin Track:** $2,000  
- **Special Track:** $2,000  

---

## Timeline

- **October 30 to November 27:** Teaming & Building Phase  
- **November 27:** Project Submission Deadline  
- **November 30 to December 7:** Judging & Evaluation & Online Demo Day  
- **December 8:** Finalists Announcement  

---

## Eligibility Criteria

- All code must be deployed on the SOON DevNet/TestNet.  
- New codebases are preferred; pre-existing code must demonstrate substantial updates during the hackathon.  
- Codebases may be public or private; private projects must share access with rahul@soo.network for validation.  
- Teams can have up to four members; individual participation is also welcome.  

**Note:** Only one team member needs to submit to Superteam Earn. Please do not submit the same project multiple times.

---

## Judging Criteria

- **Innovation (25 points):** Originality and creativity in technology application.  
- **Potential Impact (25 points):** Market potential and ecosystem impact.  
- **Technical Implementation (20 points):** Feasibility and effective use of blockchain.  
- **Usability and Design (15 points):** User experience, accessibility, and ease of use.  
- **Presentation (15 points):** Clarity, persuasiveness, and feasibility of the business plan.  

---

## Potential Ideas to Build

1. **Decentralized Exchange (DEX):**  
   Create a DEX for token swaps on the SOON network. Focus on low slippage, liquidity pools, yield farming, and staking.  
   - **Bonus:** Implement features like limit orders, perpetual contracts, or cross-chain swaps.  

2. **Token Launchpad:**  
   Develop a platform where new projects can launch tokens through Initial DEX Offerings (IDO) or other token sale mechanisms. Include features for token vesting, whitelist management, and multi-round funding.  

3. **Lending & Borrowing Protocol:**  
   Build a decentralized protocol for lending and borrowing tokens, allowing users to earn interest on deposits or borrow assets against collateral. Consider implementing flash loans or liquidation mechanisms.  

4. **Yield Aggregator:**  
   Create a yield aggregator that automatically finds and invests in the best yield opportunities across DeFi protocols on SOON. Offer users strategies to maximize returns with minimal risk.  

5. **DePIN Project: Decentralized Telecom Network:**  
   Develop a decentralized network for telecommunications, where users can provide and access communication services such as internet, phone, or messaging through decentralized nodes. Use token incentives to reward participants for contributing to network infrastructure.  

6. **DePIN Project (Decentralized IoT Network):**  
   Build a decentralized Internet of Things (IoT) network where devices can securely and privately communicate with each other. Include token rewards for IoT device operators who provide network bandwidth or data storage.  

7. **DePIN Project (Decentralized Energy Grid):**  
   Create a platform for decentralized energy production and distribution, allowing users to buy and sell energy through a peer-to-peer network. Tokenize energy credits and incentivize green energy production.  

8. **Social Token Platform:**  
   Create a platform where creators, influencers, or communities can issue and manage social tokens, allowing fans to buy, trade, and use tokens for exclusive content or perks.  

9. **NFT Marketplace:**  
   Build a decentralized marketplace where users can mint, buy, sell, and trade NFTs on the SOON network. Features could include auctions, royalties for creators, and support for multiple NFT standards.  

10. **Developer Tooling: Blockchain Explorer with Transaction Validator:**  
    Develop a blockchain explorer tailored to the SOON network that offers in-depth insights into transactions, blocks, and smart contracts. Implement advanced search functionality for addresses, tokens, and contracts. Add a transaction validation feature that allows users and developers to verify transaction authenticity and correctness before they are finalized.
`;

interface BountyDetailsProps {
  postId: string;
}

const BountyDetails = ({ postId }: BountyDetailsProps) => {
  return (
    <div className={s.root}>
      <div className={s.top}>
        <div className={s.left}>
          <div className={s.title}>SOON Genesis Hackathon</div>
          <div className={s.subTitle}>SOON</div>
          <div className={s.des}>
            <div className={s.bounty}>
              <Image src="/grayStar.svg" alt="" width={10} height={10} />
              <p>Bounty</p>
            </div>
            <div className={s.end}>
              <p>Ends in 24d</p>
            </div>
            <div className={s.message}>
              <Image src="/message.svg" alt="" width={10} height={10} />
              <p>27</p>
            </div>
            <div className={s.featured}>
              <Image src="/green.svg" alt="" width={10} height={10} />
              <p>FEATURED</p>
            </div>
          </div>
          <div className={s.ton}>
            <Image src="/ton_symbol.svg" alt="" width={16} height={16} />
            <p>
              40k <span>TON</span>
            </p>
          </div>
        </div>
        <div className={s.right}>
          <Image src="/bounty.png" alt="" width={64} height={64} />
        </div>
      </div>
      <div className={s.skills}>
        <h2 className={s.title}>SKILLS NEEDED</h2>
        <div className={s.desc}>
          <p>Frontend</p>
          <p>Backend</p>
          <p>BlockChain</p>
          <p>Mobile</p>
          <p>Design</p>
        </div>
      </div>
      <div className={s.nav}>
        <div className={s.prize}>
          <p>Prizes</p>
        </div>
        <div className={s.details}>
          <p>Details</p>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.left}>
          <BountySubmission postId={postId} />
        </div>
        <div className={`markdown ${s.right}`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BountyDetails;
