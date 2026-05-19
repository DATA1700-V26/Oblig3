-- DROP TABLE upgrade CASCADE;
-- DROP TABLE auto_clicker CASCADE;

CREATE TABLE upgrade (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    cost INT,
    title VARCHAR(255),
    cps_multi DOUBLE PRECISION,
    click_multi DOUBLE PRECISION
);

CREATE TABLE auto_clicker (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    cost INT,
    cps INT,
    title VARCHAR(255)
);

-- Upgrades
INSERT INTO upgrade (name, cost, title, cps_multi, click_multi) VALUES
    ('Lo-fi beats', 25, 'Instant study atmosphere. +100 vibes. Productivity optional', 2, 2),
    ('Coffee Machine Loyalty Card', 50, 'One more stamp and the caffeine becomes legally permanent.', 1.2, 3),
    ('Ergonomic Wrist Rest', 200, 'Your wrists finally forgive you for that 12 page essay.', 2, 1.5),
    ('3 AM Motivation', 500, 'A sudden burst of productivity caused by panic.', 2, 5),
    ('Firm Handshake with the Rector', 1000, 'A handshake so confident the administration assumes you belong here.', 5, 5),
    ('Premium Coffee Beans', 1200, 'Expensive beans clearly produce smarter thoughts.', 2, 5),
    ('Mechanical Keyboard', 1200, 'Not only are you productive, everyone within 10 meters knows it.', 5, 2);


-- Auto Clickers
INSERT INTO auto_clicker (name, cost, cps, title) VALUES
    ('Nod Thoughtfully During Lectures', 15, 1, 'No one knows what you understood, but it looks impressive.'),
    ('Passive thinking pose', 40, 2, 'Hand on chin, eyes slightly narrowed. Intelligence increases by appearance.'),
    ('Study in the lab hour', 100, 5, 'Learning by osmosis.'),
    ('Coffee', 250, 10, 'Turns sleep deprivation into academic performance.'),
    ('Befriend a TA', 750, 25, 'They won’t give you the answers. But they will strongly imply them.'),
    ('Become a TA', 2000, 60, 'Congratulations, you are now the one answering emails at 2 AM.'),
    ('Suspiciously Productive Group Study', 4000, 120, 'Four people, one whiteboard, and somehow actual learning occurs.'),
    ('Overengineered Study Spreadsheet', 20000, 500, 'Color coded productivity. Understanding still optional.'),
    ('Research Assistant', 50000, 1200, 'You do the work. The professor gets the credit.'),
    ('Publish a Paper', 120000, 3000, 'Three citations, one from your mom.'),
    ('Tenure', 5000000, 80000, 'You have achieved academic immortality.');