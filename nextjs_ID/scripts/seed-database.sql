-- Seed script for iDos Games Platform
-- This script will populate the database with realistic demo data

-- Insert demo users
INSERT INTO users (id, email, name, role, status, avatar, createdAt) VALUES
('user1', 'Arslan.bllaa@example.com', 'Arslan Bektaev', 'DEVELOPER', 'ACTIVE', 'https://api.dicebear.com/7.x/avataaars/svg?seed=john', datetime('now', '-30 days')),
('user2', 'Smiley.kindrey@example.smith@example.com', 'Smiley Kindrey', 'PUBLISHER', 'ACTIVE', 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane', datetime('now', '-25 days')),
('user3', 'mike.johnson@example.com', 'Mike Johnson', 'DEVELOPER', 'ACTIVE', 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike', datetime('now', '-20 days')),
('user4', 'sarah.wilson@example.com', 'Sarah Wilson', 'DEVELOPER', 'ACTIVE', 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah', datetime('now', '-15 days')),
('user5', 'alex.brown@example.com', 'Alex Brown', 'PUBLISHER', 'ACTIVE', 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex', datetime('now', '-10 days'));

-- Insert demo games
INSERT INTO games (id, title, description, genre, platform, status, imageUrl, revenue, totalUsers, activeUsers, downloads, rating, developerId, createdAt) VALUES
('game1', 'Crypto Warriors', 'Epic blockchain-based RPG with NFT characters and weapons', 'RPG', '["Web", "Mobile"]', 'PUBLISHED', '/placeholder.svg?height=200&width=300', 89234.50, 12459, 3421, 25678, 4.8, 'user1', datetime('now', '-25 days')),
('game2', 'NFT Racing Championship', 'High-speed racing with collectible NFT cars', 'Racing', '["Web", "Desktop"]', 'PUBLISHED', '/placeholder.svg?height=200&width=300', 67890.25, 8934, 2156, 18923, 4.6, 'user2', datetime('now', '-20 days')),
('game3', 'Block Builder Universe', 'Creative sandbox game with blockchain integration', 'Puzzle', '["Web", "Mobile", "Desktop"]', 'PUBLISHED', '/placeholder.svg?height=200&width=300', 45123.75, 15678, 4567, 32145, 4.7, 'user3', datetime('now', '-18 days')),
('game4', 'DeFi Adventure', 'Educational game teaching DeFi concepts', 'Educational', '["Web"]', 'TESTING', '/placeholder.svg?height=200&width=300', 12456.00, 2345, 567, 4567, 4.2, 'user4', datetime('now', '-15 days')),
('game5', 'Metaverse Tycoon', 'Business simulation in virtual worlds', 'Simulation', '["Web", "Desktop"]', 'DEVELOPMENT', '/placeholder.svg?height=200&width=300', 0.00, 0, 0, 0, 0.0, 'user1', datetime('now', '-10 days')),
('game6', 'Pixel Legends', 'Retro-style RPG with modern Web3 features', 'RPG', '["Mobile"]', 'PUBLISHED', '/placeholder.svg?height=200&width=300', 34567.80, 9876, 2345, 15432, 4.5, 'user5', datetime('now', '-12 days'));

-- Insert game analytics data for the last 30 days
INSERT INTO game_analytics (id, gameId, date, activeUsers, newUsers, revenue, downloads, playtime, retention1d, retention7d, retention30d) VALUES
-- Crypto Warriors analytics
('analytics1', 'game1', date('now', '-1 days'), 3421, 234, 2890.50, 456, 12450, 0.75, 0.45, 0.25),
('analytics2', 'game1', date('now', '-2 days'), 3156, 189, 2456.25, 378, 11230, 0.73, 0.43, 0.24),
('analytics3', 'game1', date('now', '-3 days'), 3289, 267, 3123.75, 523, 13567, 0.76, 0.46, 0.26),
('analytics4', 'game1', date('now', '-7 days'), 2987, 198, 2234.50, 389, 10890, 0.71, 0.41, 0.23),
('analytics5', 'game1', date('now', '-14 days'), 2756, 156, 1987.25, 298, 9876, 0.69, 0.39, 0.22),
('analytics6', 'game1', date('now', '-30 days'), 2234, 123, 1456.75, 234, 8765, 0.65, 0.35, 0.20),

-- NFT Racing analytics
('analytics7', 'game2', date('now', '-1 days'), 2156, 145, 1890.25, 289, 8934, 0.72, 0.42, 0.24),
('analytics8', 'game2', date('now', '-2 days'), 2034, 123, 1678.50, 234, 8456, 0.70, 0.40, 0.23),
('analytics9', 'game2', date('now', '-7 days'), 1876, 98, 1456.75, 198, 7890, 0.68, 0.38, 0.22),

-- Block Builder analytics
('analytics10', 'game3', date('now', '-1 days'), 4567, 345, 1234.50, 567, 15678, 0.78, 0.48, 0.28),
('analytics11', 'game3', date('now', '-2 days'), 4234, 298, 1098.25, 456, 14567, 0.76, 0.46, 0.27);

-- Insert NFTs
INSERT INTO nfts (id, name, description, imageUrl, price, rarity, gameId, createdAt) VALUES
('nft1', 'Legendary Sword of Fire', 'Rare weapon with +50 attack power', '/placeholder.svg?height=150&width=150', 0.5, 'LEGENDARY', 'game1', datetime('now', '-20 days')),
('nft2', 'Epic Dragon Mount', 'Flying mount with special abilities', '/placeholder.svg?height=150&width=150', 0.3, 'EPIC', 'game1', datetime('now', '-18 days')),
('nft3', 'Rare Racing Car', 'High-speed vehicle with unique design', '/placeholder.svg?height=150&width=150', 0.2, 'RARE', 'game2', datetime('now', '-15 days')),
('nft4', 'Common Building Block', 'Basic construction material', '/placeholder.svg?height=150&width=150', 0.01, 'COMMON', 'game3', datetime('now', '-10 days')),
('nft5', 'Uncommon Character Skin', 'Special appearance for your character', '/placeholder.svg?height=150&width=150', 0.05, 'UNCOMMON', 'game1', datetime('now', '-8 days'));

-- Insert NFT transactions
INSERT INTO nft_transactions (id, nftId, userId, type, price, status, txHash, createdAt) VALUES
('tx1', 'nft1', 'user2', 'BUY', 0.5, 'COMPLETED', '0x1234567890abcdef', datetime('now', '-5 days')),
('tx2', 'nft2', 'user3', 'BUY', 0.3, 'COMPLETED', '0x2345678901bcdefg', datetime('now', '-4 days')),
('tx3', 'nft3', 'user4', 'BUY', 0.2, 'COMPLETED', '0x3456789012cdefgh', datetime('now', '-3 days')),
('tx4', 'nft4', 'user5', 'BUY', 0.01, 'COMPLETED', '0x456789013defghi', datetime('now', '-2 days')),
('tx5', 'nft5', 'user2', 'BUY', 0.05, 'PENDING', NULL, datetime('now', '-1 days'));

-- Insert wallets
INSERT INTO wallets (id, address, type, userId, isActive, createdAt) VALUES
('wallet1', '0x742d35Cc6634C0532925a3b8D4C0C8b3C2e1e416', 'METAMASK', 'user1', 1, datetime('now', '-25 days')),
('wallet2', '0x8ba1f109551bD432803012645Hac136c5c8b3A9C', 'METAMASK', 'user2', 1, datetime('now', '-20 days')),
('wallet3', '0x1234567890123456789012345678901234567890', 'WALLETCONNECT', 'user3', 1, datetime('now', '-15 days'));

-- Insert API keys
INSERT INTO api_keys (id, name, key, userId, isActive, lastUsed, createdAt) VALUES
('api1', 'Production API', 'idos_live_1234567890abcdef', 'user1', 1, datetime('now', '-1 days'), datetime('now', '-20 days')),
('api2', 'Development API', 'idos_test_abcdef1234567890', 'user1', 1, datetime('now', '-2 days'), datetime('now', '-15 days')),
('api3', 'Analytics API', 'idos_analytics_fedcba0987654321', 'user2', 1, datetime('now', '-3 days'), datetime('now', '-10 days'));

-- Insert game reviews
INSERT INTO game_reviews (id, gameId, rating, comment, playerName, createdAt) VALUES
('review1', 'game1', 5, 'Amazing game! Love the NFT integration and gameplay.', 'CryptoGamer123', datetime('now', '-5 days')),
('review2', 'game1', 4, 'Great graphics and smooth gameplay. Could use more content.', 'BlockchainFan', datetime('now', '-4 days')),
('review3', 'game2', 5, 'Best racing game with NFTs! Cars look incredible.', 'SpeedDemon', datetime('now', '-3 days')),
('review4', 'game3', 4, 'Creative and fun. My kids love building in this game.', 'ParentGamer', datetime('now', '-2 days')),
('review5', 'game1', 3, 'Good game but needs better tutorials for Web3 features.', 'NewbieCrypto', datetime('now', '-1 days'));
