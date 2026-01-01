# Sylheti Nagri Immersive Learning Portal (Nagripath)

## 1. Project Overview

The **Sylheti Nagri Immersive Learning Portal** is a web-based, mobile-friendly Ed-Tech platform designed to preserve, promote, and modernize the Sylheti Nagri script using **Augmented Reality (AR)**, **Artificial Intelligence (AI)**, and gamified learning techniques.

The platform is being developed to participate in the **MillionX Bangladesh – AI Innovation Hackathon 2025**, representing a unique fusion of linguistic tradition and cutting-edge technology. 

<img width="887" height="499" alt="image" src="https://github.com/user-attachments/assets/b531bbae-37ab-4771-a7c6-0c40a6f58de9" />


**Domain:** ED-tech  
**Challenge:** Multimodal learning assistant (text, voice, visuals)

## 2. Problem Statement

Sylheti Nagri, despite its rich historical and cultural significance, is at risk of extinction due to:

- Absence of modern digital learning tools
- Limited educational integration
- Low youth engagement
- Lack of immersive and interactive learning experiences
- Poor accessibility in rural and low-bandwidth regions

Traditional text-based approaches fail to preserve learner interest and cultural depth, making it difficult to sustain the script for future generations.

## 3. Target Users

- Students and self-learners of Sylheti Nagri
- Children and beginner learners
- Educators and linguists
- Cultural preservationists
- Hackathon evaluators and developers

## 4. Why the Problem Matters

### 4.1 Local Impact
- Sylheti Nagri is a vital part of Bangladesh's linguistic heritage
- Loss of the script threatens historical literature and identity
- Rural learners lack access to engaging educational resources

### 4.2 Scalable Impact
- The solution can be extended to other endangered scripts
- Can be adopted by schools, cultural institutions, and museums
- Demonstrates how AI and AR can support global cultural sustainability

## 5. Solution Description

**5.1 What the System Is**  
The system is a standalone web application enhanced with AR-based immersive learning, AI-powered transliteration, and gamified educational modules. Artificial Intelligence is primarily used for modification, guidance, and transliteration, rather than direct control of system operations.

## 6. Core Features

- �กระSylheti Nagri digital keyboard
- Bangla ↔ Sylheti Nagri script conversion
- AR-based 3D letters with pronunciation
- Gamified learning modules (Basic, Intermediate, Advanced)
- AI conversational chatbot for guided learning
- Language history and cultural storytelling section
- Offline-first learning support

## 7. System Features
<img width="961" height="472" alt="image" src="https://github.com/user-attachments/assets/c67c14e8-3c32-4dce-b77c-664c35d48e87" />

### 7.1 Sylheti Nagri Keyboard
- Input Sylheti Nagri characters
- Practice writing and typing
- Each alphabet linked to a word with visual representation
- 3D AR experience option

### 7.2 Immersive Augmented Reality Experience
- Floating 3D letters in real-world surroundings
- Tap interaction for pronunciation
- Snapchat/Instagram-style AR filters

### 7.3 Artificial Intelligence Script Conversion
- Transliteration of Bangla text into Sylheti Nagri
- AI models ensure accuracy

### 7.4 Gamified Learning Modules
- AR level-up games for engagement
- Progress tracking and rewards

### 7.5 Artificial Intelligence Interactive Guide
- Conversational assistant for alphabets, history, and pronunciation
- Provides feedback and guidance
- Chatbot interface

### 7.6 Language History Section
- Visual and textual content about Sylheti Nagri heritage

## 8. User Journey / Flow

1. User accesses the portal via web or mobile browser
2. Selects a learning mode (Alphabet, Keyboard, AR, Game)
3. Uses Bangla–Nagri transliteration or keyboard input
4. Activates AR camera to visualize 3D letters
5. Engages in level-based AR games
6. Interacts with AI chatbot for guidance
7. Explores historical and cultural content

## 9. Workflow Gears Motion

1. **Planning and Design** - Wireframe pages, design AR assets, select Nagri fonts in Blender
2. **Frontend Development** - Build React app with 2D Phaser game and AR.js 3D letters
3. **AI and Backend Setup** - Setup Node.js backend, OpenAI chatbot, Bangla-Nagri converter
4. **AR and Immersive Features** - Integrate AR.js/Unity AR Foundation
5. **Integration and Gamification** - Link features with levels, badges, 1952 cultural content
6. **Testing & Deployment** - Test/deploy on Vercel, create demo video and pitch deck
<img width="948" height="540" alt="image" src="https://github.com/user-attachments/assets/d0204461-9ea2-4f4f-b091-d08e06e2d2bb" />

## 10. Problem–Solution Mapping

| **Problem** | **Solution** |
|-------------|--------------|
| Traditional language learning methods fail to preserve Sylheti Nagri effectively | An immersive, AI-assisted, AR-powered Ed-Tech platform that modernizes language learning while respecting cultural authenticity |

## 11. Demo Flow

1. Landing page introduction
2. Alphabet learning with Bangla–Nagri comparison
3. AR camera activation showing floating 3D letters
4. Tap-to-hear pronunciation
5. Script conversion demonstration
6. Gamified level-up learning
7. AI chatbot interaction
8. Cultural history visualization

## 12. System Architecture

### 12.1 Frontend
- React.js
- Tailwind CSS
- Phaser.js (2D gamification)
- AR.js / Unity AR Foundation

### 12.2 Backend
- Node.js
- Express.js
- MongoDB
- RESTful APIs

### 12.3 AI Layer
- Python-based LLM models
- Bangla–Sylheti Nagri transliteration
- Conversational AI chatbot
- [Hugging Face](https://huggingface.co/datasets/shivdi1999/nagri-sound-dataset)

### 12.4 Authentication & Deployment
- Firebase Authentication
- JWT
- Deployed on Vercel / Cloud infrastructure
<img width="869" height="489" alt="image" src="https://github.com/user-attachments/assets/81f4fc80-7132-485e-93ab-7b9319d6ab8c" />

## 13. Dataset Description (Nagri Sound Dataset)

The **nagri-sound-dataset** hosted on Hugging Face contains letter-level reference pronunciation audio samples for the Sylheti Nagri script. 

**Key Features:**
- Supports AI-driven pronunciation feedback
- AR-based letter triggering
- Multimodal learning (text, voice, visuals)

**Dataset Fields:**
- `sample_id`, `letter_id`, `audio_file`
- `spoken_language`, `target_language`
- `duration_ms`, `noise_level`, `confidence_score`
- `unity_action_id`, `gesture_expected`

**Dataset Link:** [![Hugging Face](https://huggingface.co/datasets/shivdi1999/nagri-sound-dataset)](https://huggingface.co/datasets/shivdi1999/nagri-sound-dataset)

## 14. Functional Requirements

- Real-time AR rendering and audio playback
- Script conversion accuracy
- AI chatbot responsiveness
- Progress tracking and gamification

## 15. Non-Functional Requirements

- **Performance:** Smooth AR interaction
- **Scalability:** Thousands of concurrent users
- **Accessibility:** Offline mode, bilingual support
- **Security:** Secure authentication and data privacy
- **Usability:** Simple UI with gamified UX
- **Cultural Sensitivity:** Respectful heritage representation

## 16. Impact and Scalability

### 16.1 Expected Impact
- Revival of Sylheti Nagri script
- Increased youth engagement
- Inclusive access to language education
- Promotion of cultural identity through technology

### 16.2 Scalability
- Expandable to other endangered languages
- Integration with schools and Ed-Tech platforms
- AI analytics for adaptive learning paths

## 17. Sustainable Development Goals
<img width="1004" height="565" alt="image" src="https://github.com/user-attachments/assets/043d2db4-8059-4064-a884-bcfef7467222" />


## 18. Team Overview

| **Name** | **Role** | **Institution** |
|----------|----------|-----------------|
| Pritom Paul | Lead Researcher, XR Developer & System Architect (Team Lead) | Metropolitan University, Bangladesh |
| Shivani Gokul Badgujar | XR Conceptualizer, 3D Designer & AI Developer | MIT Institute Of Design, India |
| Sahil Uddin Ishmam | Software Developer (Django, React) & Competitive Programmer | Metropolitan University, Bangladesh |
| Ratul Saha Roy | Full-Stack Software Developer & Video Editor | Metropolitan University, Bangladesh |
| Banidipa Chakraborty | Graphic Designer, Content Writer & Vocal Artist | Metropolitan University, Bangladesh |

---

## 📋 Project Summary

The Sylheti Nagri Immersive Learning Portal is an innovative Ed-Tech solution for the MillionX Bangladesh – AI Innovation Hackathon 2025, targeting the Multimodal Learning Assistant challenge. This web-based, mobile-friendly platform fuses Augmented Reality (AR), AI-powered transliteration, gamified modules, and cultural heritage to preserve and modernize the Sylheti Nagri script. Key features include a digital keyboard, interactive 3D AR letters with pronunciation, Bangla-to-Nagri conversion, leveled AR games, an AI conversational chatbot guide, and historical content inspired by the 1952 Language Movement. Built with Unity AR Foundation, React.js, Node.js, and OpenAI models, it ensures offline accessibility, scalability, and cultural sensitivity for learners, educators, and children in low-bandwidth regions.        give me same to same as a markdown language

**Dataset:** [![Hugging Face Dataset](https://huggingface.co/datasets/shivdi1999/nagri-sound-dataset)](https://huggingface.co/datasets/shivdi1999/nagri-sound-dataset)
**Website:** https://bornokontho.web.app/
**Youtube Demo Video:** https://youtu.be/L9S8TKtQ_nE
---

*This project highlights Bangladesh's capacity to lead in culturally enriched, future-ready Ed-Tech solutions.*
