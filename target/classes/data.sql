INSERT INTO upgrade (name, cost, title, cps_multi, click_multi)
SELECT 'Lo-fi beats', 25, 'Instant study atmosphere. +100 vibes. Productivity optional', 2, 2
WHERE NOT EXISTS (SELECT 1 FROM upgrade);

INSERT INTO upgrade (name, cost, title, cps_multi, click_multi)
SELECT 'Coffee Machine Loyalty Card', 50, 'One more stamp and the caffeine becomes legally permanent.', 1.2, 3
WHERE NOT EXISTS (SELECT 1 FROM upgrade WHERE name = 'Coffee Machine Loyalty Card');

INSERT INTO upgrade (name, cost, title, cps_multi, click_multi)
SELECT 'Ergonomic Wrist Rest', 200, 'Your wrists finally forgive you for that 12 page essay.', 2, 1.5
WHERE NOT EXISTS (SELECT 1 FROM upgrade WHERE name = 'Ergonomic Wrist Rest');

INSERT INTO upgrade (name, cost, title, cps_multi, click_multi)
SELECT '3 AM Motivation', 500, 'A sudden burst of productivity caused by panic.', 2, 5
WHERE NOT EXISTS (SELECT 1 FROM upgrade WHERE name = '3 AM Motivation');

INSERT INTO upgrade (name, cost, title, cps_multi, click_multi)
SELECT 'Firm Handshake with the Rector', 1000, 'A handshake so confident the administration assumes you belong here.', 5, 5
WHERE NOT EXISTS (SELECT 1 FROM upgrade WHERE name = 'Firm Handshake with the Rector');

INSERT INTO upgrade (name, cost, title, cps_multi, click_multi)
SELECT 'Premium Coffee Beans', 1200, 'Expensive beans clearly produce smarter thoughts.', 2, 5
WHERE NOT EXISTS (SELECT 1 FROM upgrade WHERE name = 'Premium Coffee Beans');

INSERT INTO upgrade (name, cost, title, cps_multi, click_multi)
SELECT 'Mechanical Keyboard', 1200, 'Not only are you productive, everyone within 10 meters knows it.', 5, 2
WHERE NOT EXISTS (SELECT 1 FROM upgrade WHERE name = 'Mechanical Keyboard');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Nod Thoughtfully During Lectures', 15, 1, 'No one knows what you understood, but it looks impressive.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker);

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Passive thinking pose', 40, 2, 'Hand on chin, eyes slightly narrowed. Intelligence increases by appearance.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Passive thinking pose');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Study in the lab hour', 100, 5, 'Learning by osmosis.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Study in the lab hour');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Coffee', 250, 10, 'Turns sleep deprivation into academic performance.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Coffee');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Befriend a TA', 750, 25, 'They will not give you the answers. But they will strongly imply them.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Befriend a TA');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Become a TA', 2000, 60, 'Congratulations, you are now the one answering emails at 2 AM.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Become a TA');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Suspiciously Productive Group Study', 4000, 120, 'Four people, one whiteboard, and somehow actual learning occurs.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Suspiciously Productive Group Study');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Overengineered Study Spreadsheet', 20000, 500, 'Color coded productivity. Understanding still optional.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Overengineered Study Spreadsheet');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Research Assistant', 50000, 1200, 'You do the work. The professor gets the credit.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Research Assistant');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Publish a Paper', 120000, 3000, 'Three citations, one from your mom.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Publish a Paper');

INSERT INTO auto_clicker (name, cost, cps, title)
SELECT 'Tenure', 5000000, 80000, 'You have achieved academic immortality.'
WHERE NOT EXISTS (SELECT 1 FROM auto_clicker WHERE name = 'Tenure');
