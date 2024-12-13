---

# Salakot-Salpakan  

## 🎮 About  
**Salakot-Salpakan** is an online gaming platform for *Game of the Generals*, a strategic board game of deception and tactics. Built with **Laravel** and **TailwindCSS**, this platform allows players to engage in thrilling matches, test their strategy skills, and connect with fellow enthusiasts in a sleek and responsive interface.  

## 🕹️ Features  
- **Player vs Player Matches**  
  - Real-time gameplay with seamless turn-based interactions.  

- **Rank-Based Matchmaking**  
  - Compete with players of similar skill levels and climb the leaderboard.  

- **AI Arbiter**  
  - Automated enforcement of game rules to ensure fair play.  

- **Customizable Profiles**  
  - Players can personalize their avatars, bios, and ranks.  

- **Spectator Mode**  
  - Watch live games or review past matches.  

- **Multiplatform Compatibility**  
  - Fully responsive design for desktop and mobile gameplay.  

## 🛠️ Technologies Used  
- **Backend:** Laravel 11  
- **Frontend:** TailwindCSS, Blade Templates  
- **Database:** MySQL  
- **WebSockets:** Laravel Echo for real-time updates  

## ⚙️ Installation  

### Prerequisites  
- PHP >= 8.2  
- Composer  
- Node.js and npm  
- MySQL  

### Steps  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/your-username/salakot-salpakan.git  
   cd salakot-salpakan  
   ```  

2. **Install Dependencies**  
   ```bash  
   composer install  
   npm install && npm run dev  
   ```  

3. **Set Up Environment Variables**  
   - Copy the `.env` example file:  
     ```bash  
     cp .env.example .env  
     ```  
   - Update the `.env` file with your database credentials and other settings, including real-time broadcasting settings (Pusher or similar).  

4. **Generate Application Key**  
   ```bash  
   php artisan key:generate  
   ```  

5. **Run Migrations**  
   ```bash  
   php artisan migrate  
   ```  

6. **Seed the Database** (Optional)  
   ```bash  
   php artisan db:seed  
   ```  

7. **Run WebSocket Server** (If applicable)  
   ```bash  
   php artisan websockets:serve  
   ```  

8. **Start the Development Server**  
   ```bash  
   php artisan serve  
   ```  
   Access the app at [http://127.0.0.1:8000](http://127.0.0.1:8000).  

## 🎲 Gameplay Instructions  
1. Create an account and log in.  
2. Join or create a match in the matchmaking lobby.  
3. Strategically position your pieces and begin the game.  
4. Use strategy and deception to capture your opponent's flag or eliminate their forces.  

## 🤝 Contributing  
We welcome contributions to enhance the Salakot-Salpakan platform. Here's how you can help:  
- Fork the repository.  
- Create a feature branch.  
- Submit a pull request.  

## 📜 License  
This project is licensed under the MIT License.  

## 📬 Contact  
For support or inquiries, reach out at:  
- **Email:** support@salakotsalpakan.com  
- **Website:** [www.salakotsalpakan.com](http://www.salakotsalpakan.com)  

---  