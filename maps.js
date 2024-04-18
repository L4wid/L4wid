
var maps = {
    0: [0, 'Tipi', 0, -27, -20, 1, 0, 0, 0, 251],
    1: [1, 'Musée', 0, -3, 10, 1, 3, 0, 0, 253],
    2: [2, 'Galerie', 0, -3, 0, 1, 0, 0, 0, 253],
    3: [3, 'Robot immergé', 0, -24, -30, 1, 0, 0, 0, 252],
    4: [4, 'Chute bas', 0, -24, -20, 1, 0, 0, 0, 252],
    5: [5, 'Chute milieu', 0, -24, -10, 1, 1, 0, 0, 252],
    6: [6, 'Plongeoir', 0, 33, -10, 1, 0, 0, 0, 255],
    7: [7, 'Bar blahiti secret', 0, 33, -10, 1, 0, 0, 0],
    8: [8, 'Chute haut', 0, -24, 0, 1, 0, 0, 0, 252],
    9: [9, 'Accueil', 0, -12, 0, 0, 3, 0, 0, 55],
    10: [10, 'Prison', 0, 0, 0, 1, 3, 0, 0],
    11: [11, 'Porte blindée', 0, -21, -30, 1, 0, 0, 0, 252],
    12: [12, 'Caverne barque', 0, -21, -20, 1, 0, 0, 0, 252],
    13: [13, 'Irwish v2', 0, -21, 0, 1, 0, 0, 0, 252],
    14: [14, 'Caverne champi', 0, -21, -10, 1, 0, 0, 0, 252],
    15: [15, "Mine d'Or", 0, -18, 0, 1, 0, 0, 0, 252],
    16: [16, 'Mare', 0, -6, 0, 1, 0, 0, 0],
    17: [17, 'Saule pleureur', 0, -6, 10, 1, 3, 0, 0],
    18: [18, 'Tour céleste 1', 0, 3, 0, 1, 0, 0, 0],
    19: [19, 'Volcan', 0, 9, 0, 1, 0, 0, 0, 254],
    20: [20, 'Mine entrée', 0, -12, -10, 2, 0, 0, 0, 252],
    21: [21, 'Mine chariots', 0, -9, -10, 2, 0, 0, 0, 55],
    22: [22, 'Entrée Grotte', 0, -6, -10, 2, 0, 0, 0, 55],
    23: [23, 'Seismatique', 0, -3, -10, 2, 0, 0, 0, 55],
    24: [24, 'Tunnel céleste', 0, 0, -10, 2, 0, 0, 0, 55],
    25: [25, 'Pont Suspendu', 0, 12, 0, 1, 0, 0, 0, 254],
    26: [26, 'Tamtam', 0, 15, 0, 1, 0, 0, 0, 255],
    27: [27, 'Blahiti Aérogare', 0, 18, 0, 1, 0, 0, 0, 255],
    28: [28, 'Hamac', 0, 15, -10, 1, 3, 0, 0, 255],
    29: [29, 'Blahiti bar', 0, 18, -10, 1, 0, 0, 0, 255],
    30: [30, 'Plage des 3 Parasols', 0, 21, -10, 1, 0, 0, 0, 255],
    31: [31, 'Radeau', 0, 36, -10, 1, 0, 0, 0, 256],
    32: [32, 'Phare', 0, 42, -10, 1, 0, 0, 0, 256],
    33: [33, 'Trésor', 0, 33, -20, 1, 0, 0, 0, 256],
    34: [34, 'Chute volcanique', 0, -6, -20, 2, 0, 0, 0, 55],
    35: [35, 'Prison de pierre', 0, -3, -20, 2, 0, 0, 0, 55],
    36: [36, 'Passerelle hantée', 0, 0, -20, 2, 0, 0, 0, 55],
    37: [37, 'Chute volcanique bas', 0, -6, -30, 2, 0, 0, 0, 55],
    38: [38, 'Lac des anciens', 0, -3, -30, 2, 0, 0, 0, 55],
    39: [39, 'Sanctuaire du dragon', 0, 0, -30, 2, 0, 0, 0, 55],
    40: [40, 'Passage interdit', 0, 0, 0, 2, 0, 0, 0],
    41: [41, 'Chambre flottante', 0, -9, -20, 2, 0, 0, 0, 55],
    42: [42, 'Sanctuaire du dragon n°2', 0, -9, -20, 2, 0, 0, 0],
    43: [43, 'Requin', 0, 36, -20, 1, 0, 0, 0, 256],
    44: [44, 'Bulles', 0, 42, -20, 1, 0, 0, 0, 256],
    45: [45, 'Epave', 0, 36, -30, 1, 0, 0, 0, 256],
    46: [46, 'Gouffre marin', 0, 42, -30, 1, 0, 0, 0, 256],
    47: [47, 'Sphere marine', 0, 36, -40, 1, 0, 0, 0, 256],
    48: [48, 'Huitre', 0, 42, -40, 1, 0, 0, 0, 256],
    49: [49, 'Méteore 4', 0, -27, 0, 1, 0, 0, 0],
    50: [50, 'Le Nuage du Tipi', 0, -27, -10, 1, 0, 0, 0, 251],
    51: [51, 'Aéro transport', 1, 0, 0, 1, 2, 0, 0],
    52: [52, 'Lévitarium', 0, -30, -10, 1, 0, 0, 0, 251],
    53: [53, 'Méteore 3', 0, -30, 0, 1, 2, 0, 0, 251],
    54: [54, 'Catapulte', 0, -30, -20, 1, 0, 0, 0, 251],
    55: [55, 'Paradis', 0, -12, 10, 1, 0, 0, 0],
    56: [56, 'Squicky', 0, -12, 10, 1, 0, 0, 0],
    296: [296, 'V1-9 Soucoupe', 0, -36, 0, 1, 0, 0, 0],
    57: [57, 'Tour céleste 2', 0, 3, 10, 1, 0, 0, 0],
    58: [58, 'Plaine Flottante 4', 0, 9, 10, 1, 0, 0, 0, 254],
    59: [59, 'Grotte noire', 0, -9, -10, 2, 0, 0, 0],
    60: [60, "Non man's lanl", 0, 0, 0, 1, 0, 0, 0],
    62: [62, 'Tour céleste 3', 0, 3, 20, 1, 1, 0, 0],
    63: [63, 'Tour céleste 4', 0, 3, 30, 1, 3, 0, 0],
    64: [64, 'Méteore 1', 0, -30, 10, 1, 0, 0, 0, 251],
    65: [65, 'Méteore 2', 0, -27, 10, 1, 0, 0, 0, 251],
    66: [66, 'Ciel', 0, -24, 10, 1, 0, 0, 0, 252],
    67: [67, 'Ciel', 0, -21, 10, 1, 0, 0, 0, 252],
    68: [68, 'Ciel', 0, -18, 10, 1, 0, 0, 0, 252],
    69: [69, 'Ciel', 0, -12, 10, 1, 0, 0, 0, 55],
    70: [70, 'Ciel', 0, -6, 20, 1, 0, 0, 0],
    71: [71, 'Cristal Gris', 0, -3, 20, 1, 0, 0, 0],
    72: [72, 'Plaine Flottante 3', 0, 9, 20, 1, 0, 0, 0, 254],
    73: [73, 'Ciel', 0, 12, 10, 1, 0, 0, 0, 254],
    74: [74, 'Ciel', 0, 15, 10, 1, 0, 0, 0, 255],
    75: [75, 'Ciel', 0, 18, 10, 1, 0, 0, 0, 255],
    76: [76, 'Ciel', 0, 21, 0, 1, 0, 0, 0, 255],
    77: [77, 'Ciel', 0, 33, 0, 1, 0, 0, 0, 255],
    78: [78, 'Ciel', 0, 36, 0, 1, 0, 0, 0, 256],
    79: [79, 'Ciel', 0, 42, 0, 1, 0, 0, 0, 256],
    80: [80, 'Ciel', 0, -30, 20, 1, 0, 0, 0, 251],
    81: [81, 'Ciel', 0, -27, 20, 1, 0, 0, 0, 251],
    82: [82, 'Ciel', 0, -24, 20, 1, 0, 0, 0, 252],
    83: [83, 'Ciel', 0, -21, 20, 1, 0, 0, 0, 252],
    84: [84, 'Ciel', 0, -18, 20, 1, 0, 0, 0, 252],
    85: [85, 'Ciel', 0, -12, 20, 1, 0, 0, 0, 55],
    86: [86, 'Ciel', 0, -6, 30, 1, 0, 0, 0],
    87: [87, 'Cristal Rouge', 0, -3, 30, 1, 0, 0, 0],
    88: [88, 'Le Dormeur', 0, 9, 30, 1, 0, 0, 0, 254],
    89: [89, 'Ciel', 0, 12, 20, 1, 0, 0, 0, 254],
    90: [90, 'Ciel', 0, 15, 20, 1, 0, 0, 0, 255],
    91: [91, 'Ciel', 0, 18, 20, 1, 0, 0, 0, 255],
    92: [92, 'Ciel', 0, 21, 10, 1, 0, 0, 0, 255],
    93: [93, 'Ciel', 0, 33, 10, 1, 0, 0, 0, 255],
    94: [94, 'Ciel', 0, 36, 10, 1, 0, 0, 0, 256],
    95: [95, 'Ciel', 0, 42, 10, 1, 0, 0, 0, 256],
    96: [96, 'Map Bleu', 0, 9, 10, 1, 0, 0, 0],
    130: [130, 'V1-Accueil', 0, 3, 10, 1, 0, 0, 0],
    131: [131, 'V1-chute', 0, 6, 10, 1, 0, 0, 0],
    132: [132, 'V1-entrée-yova', 0, 9, 10, 1, 0, 0, 0],
    133: [133, 'V1-d3', 0, 12, 10, 1, 0, 0, 0],
    134: [134, 'V1-g1', 0, 0, 10, 1, 0, 0, 0],
    135: [135, 'V1-g2', 0, -3, 10, 1, 0, 0, 0],
    136: [136, 'V1-g3', 0, -6, 10, 1, 0, 0, 0],
    137: [137, 'V1-g4', 0, -9, 0, 1, 0, 0, 0],
    138: [138, 'V1-g5', 0, -12, 0, 1, 0, 0, 0],
    139: [139, 'V1-g6', 0, -15, 0, 1, 3, 0, 0],
    140: [140, 'V1-g7', 0, -18, 0, 1, 0, 0, 0],
    141: [141, 'V1-g8', 0, -21, 0, 1, 0, 0, 0],
    142: [142, 'V1-g9', 0, -24, 0, 1, 3, 0, 0],
    143: [143, 'V1-g10', 0, -24, 0, 1, 3, 0, 0],
    144: [144, 'V1-g11', 0, -27, 0, 1, 0, 0, 0],
    145: [145, 'V1-gs3', 0, -6, 0, 1, 0, 0, 0],
    146: [146, 'V1-gs2', 0, -3, 0, 1, 0, 0, 0],
    147: [147, 'V1-gs1', 0, 0, 0, 1, 0, 0, 0],
    148: [148, 'V1-s0', 0, 3, 0, 1, 0, 0, 0],
    149: [149, 'V1-ds1', 0, 6, 0, 1, 0, 0, 0],
    150: [150, 'V1-ds2', 0, 9, 0, 1, 0, 0, 0],
    151: [151, 'V1-Irwish-01', 0, -6, 10, 1, 0, 0, 0],
    152: [152, 'V1-Irwish-02', 0, -3, 10, 1, 0, 0, 0],
    153: [153, 'V1-Irwish-wc', 0, -3, 10, 1, 0, 0, 0],
    154: [154, 'V1-Yova-g1', 0, 6, 10, 1, 2, 0, 0],
    155: [155, 'V1-Yova', 0, 9, 10, 1, 0, 0, 0],
    156: [156, 'V1-Yova-d1', 0, 12, 10, 1, 0, 0, 0],
    157: [157, 'V1-Yova-d2', 0, 15, 10, 1, 0, 0, 0],
    158: [158, 'Musée - Foreuse', 0, -6, 10, 1, 0, 0, 0],
    159: [159, 'Musée Entrée', 0, -3, 10, 1, 0, 0, 0],
    160: [160, 'Musée - Soucoupe', 0, 0, 10, 1, 0, 0, 0],
    161: [161, 'Musée - V1', 0, 3, 10, 1, 2, 0, 0],
    167: [167, 'Aérogare Accueil', 0, -15, 0, 1, 0, 0, 0, 55],
    168: [168, 'Ciel', 0, -15, 10, 1, 0, 0, 0, 55],
    169: [169, 'Ciel', 0, -15, 20, 1, 0, 0, 0, 55],
    172: [172, 'Statue Créateurs', 0, -9, 0, 1, 0, 0, 0, 55],
    173: [173, 'Ciel', 0, -9, 10, 1, 0, 0, 0, 55],
    174: [174, 'Ciel', 0, -9, 20, 1, 0, 0, 0, 55],
    175: [175, 'Ciel', 0, -9, 30, 1, 0, 0, 0, 55],
    176: [176, 'Aérogare Céleste', 0, 0, 0, 1, 0, 0, 0],
    177: [177, 'Abeille Fossilisée', 0, 0, 10, 1, 0, 0, 0],
    178: [178, 'Cristal Bleu', 0, 0, 20, 1, 0, 0, 0],
    179: [179, 'Plateformes du vide', 0, 0, 30, 1, 3, 0, 0],
    180: [180, 'Boueuse', 0, 6, 0, 1, 0, 0, 0, 254],
    181: [181, 'Plaine Flottante 2', 0, 6, 10, 1, 1, 0, 0, 254],
    182: [182, 'Plaine Flottante 1', 0, 6, 20, 1, 1, 0, 0, 254],
    183: [183, 'Cristal Magique', 0, 6, 30, 1, 1, 0, 0, 254],
    184: [184, 'Ciel', 0, 12, 30, 1, 0, 0, 0, 254],
    195: [195, 'Map Secrète', 0, 12, 30, 1, 0, 0, 0],
    200: [200, 'Map Seal3', 0, 12, 30, 1, 0, 0, 0],
    251: [251, 'Paradis catapulte', 0, -30, 10, 1, 0, 0, 0],
    252: [252, 'Paradis irwish', 0, -21, 10, 1, 0, 0, 0],
    253: [253, 'Paradis Musée', 0, -3, 10, 1, 0, 0, 0],
    254: [254, 'Paradis volcan', 0, 9, 10, 1, 0, 0, 0],
    255: [255, 'Paradis plage', 0, 21, 10, 1, 0, 0, 0],
    256: [256, 'Paradis phare', 0, 42, 10, 1, 0, 0, 0],
    98: [98, 'La grotte secrète', 0, -33, -30, 1, 0, 0, 0, 251],
    100: [100, 'Champi géant, pied', 0, -33, -20, 1, 0, 0, 0, 251],
    103: [103, 'Champi géant', 0, -33, -10, 1, 0, 0, 0, 251],
    106: [106, 'Ciel', 0, -33, 0, 1, 0, 0, 0, 251],
    109: [109, 'Ciel', 0, -33, 10, 1, 0, 0, 0, 251],
    112: [112, 'Ciel', 0, -33, 20, 1, 0, 0, 0, 251],
    99: [99, 'Lazeroïd', 0, -36, -30, 1, 0, 0, 0, 264],
    101: [101, 'ZONE 52, belle vue !', 0, -36, -20, 1, 0, 0, 0, 264],
    104: [104, 'Aérogare Zone 52', 0, -36, 0, 1, 0, 0, 0, 264],
    107: [107, 'Ciel', 0, -36, -10, 1, 0, 0, 0, 264],
    110: [110, 'Ciel', 0, -36, 10, 1, 0, 0, 0, 264],
    113: [113, 'Ciel', 0, -36, 20, 1, 0, 0, 0, 264],
    127: [127, 'Racine, pied', 0, -39, -30, 1, 0, 0, 0, 264],
    102: [102, 'Racine, milieu 1', 0, -39, -20, 1, 0, 0, 0, 264],
    105: [105, 'Racine, milieu 2', 0, -39, -10, 1, 0, 0, 0, 264],
    108: [108, 'Racine, haut', 0, -39, 0, 1, 0, 0, 0, 264],
    111: [111, 'Ciel', 0, -39, 10, 1, 0, 0, 0, 264],
    114: [114, 'Ciel', 0, -39, 20, 1, 0, 0, 0, 264],
    128: [128, 'Falaise du Croqueur', 0, -42, -30, 1, 0, 0, 0, 264],
    129: [129, 'Le Croqueur', 0, -42, -20, 1, 2, 0, 0, 264],
    257: [257, 'Pont des racines', 0, -42, -10, 1, 0, 0, 0, 264],
    258: [258, 'Ciel', 0, -42, 0, 1, 0, 0, 0, 264],
    259: [259, 'Ciel', 0, -42, 10, 1, 0, 0, 0, 264],
    260: [260, 'Ciel', 0, -42, 20, 1, 0, 0, 0, 264],
    264: [264, 'Paradis Zone 52', 0, -36, 10, 1, 0, 0, 0],
    270: [270, 'V1-5 Coin Tranquille', 0, -12, -20, 1, 0, 0, 0],
    271: [271, "V1-5 L'Irwish", 0, -12, -10, 1, 0, 0, 0],
    272: [272, 'V1-5 Sous-sol Irwish', 0, -12, 0, 1, 0, 0, 0],
    273: [273, 'V1-5 Le Clocher', 0, -9, -20, 1, 0, 0, 0],
    274: [274, 'V1-5 Grimpade', 0, -9, -10, 1, 3, 0, 0],
    275: [275, 'V1-5 Le Ragoût', 0, -9, 0, 1, 0, 0, 0],
    276: [276, 'V1-5 Ciel', 0, -6, -20, 1, 0, 0, 0],
    277: [277, 'V1-5 Accueil', 0, -6, -10, 1, 0, 0, 0],
    278: [278, 'V1-5 Le Passage', 0, -6, 0, 1, 0, 0, 0],
    279: [279, 'V1-5 Le Blablacoptère', 0, -3, -20, 1, 0, 0, 0],
    280: [280, "V1-5 Chute d'eau", 0, -3, -10, 1, 0, 0, 0],
    281: [281, 'V1-5 Entrée Grotte', 0, -3, 0, 1, 0, 0, 0],
    282: [282, 'V1-5 Glouglou', 0, -3, 10, 1, 0, 0, 0],
    283: [283, 'V1-5 Le Creu', 0, 0, -20, 1, 0, 0, 0],
    284: [284, 'V1-5 Tom le solitaire', 0, 0, -10, 1, 0, 0, 0],
    285: [285, 'V1-5 Chez Charlie', 0, 0, 0, 1, 0, 0, 0],
    286: [286, 'V1-5 Le papillon perdu', 0, 3, -20, 1, 0, 0, 0],
    287: [287, 'V1-5 Le petit Bassin', 0, 3, -10, 1, 0, 0, 0],
    288: [288, 'V1-5 la Source', 0, 3, 0, 1, 0, 0, 0],
    289: [289, 'V1-5 Coin très tranquille', 0, 6, -20, 1, 0, 0, 0],
    290: [290, 'V1-5 Galerie Yova', 0, 6, -10, 1, 0, 0, 0],
    291: [291, 'V1-5 Labo Yova', 0, 6, 0, 1, 0, 0, 0],
    292: [292, 'V1-5 Ciel', 0, 9, -20, 1, 0, 0, 0],
    293: [293, 'V1-5 Bus de la Plage', 0, 9, -10, 1, 0, 0, 0],
    294: [294, 'V1-5 Creuse', 0, 9, 0, 1, 0, 0, 0],
    295: [295, 'Musée - V1.5', 0, -9, 10, 1, 0, 0, 0],
    297: [297, "V1-9 Chute d'eau", 0, -33, 0, 1, 0, 0, 0],
    298: [298, 'V1-9 UFO Shop', 0, -33, -10, 1, 0, 0, 0],
    299: [299, 'V1-9 Zone 51', 0, -30, 0, 1, 0, 0, 0],
    300: [300, 'V1-9 00:23', 0, -30, -10, 1, 0, 0, 0],
    301: [301, 'V1-9 Crop Circle', 0, -27, 0, 1, 0, 0, 0],
    302: [302, 'V1-9 Épouvantail ', 0, -24, 0, 1, 0, 0, 0],
    303: [303, 'V1-9 Irwish', 0, -21, 0, 1, 0, 0, 0],
    304: [304, 'V1-9 Rebond', 0, -21, -10, 1, 0, 0, 0],
    305: [305, 'V1-9 Aérogare Accueil', 0, -18, 0, 1, 0, 0, 0],
    306: [306, 'V1-9 Entrée Mine', 0, -18, -10, 1, 0, 0, 0],
    307: [307, 'V1-9 Accueil', 0, -15, 0, 1, 0, 0, 0],
    308: [308, 'V1-9 Mine chariots', 0, -15, -10, 1, 0, 0, 0],
    309: [309, 'V1-9 Porte secrète', 0, -15, -20, 1, 0, 0, 0],
    310: [310, 'V1-9 Coeur de Blablaworld V2', 0, -15, -30, 1, 0, 0, 0],
    311: [311, 'V1-9 Hélico', 0, -12, 10, 1, 0, 0, 0],
    312: [312, 'V1-9 Petite marre', 0, -12, 0, 1, 0, 0, 0],
    313: [313, 'V1-9 Mine maison', 0, -12, -10, 1, 0, 0, 0],
    314: [314, 'V1-9 Musée', 0, -9, 10, 1, 0, 0, 0],
    315: [315, 'V1-9 Galerie Yova', 0, -9, 0, 1, 0, 0, 0],
    316: [316, 'V1-9 Labo Yova', 0, -9, -10, 1, 0, 0, 0],
    317: [317, 'V1-9 Bus', 0, -6, 0, 1, 0, 0, 0],
    318: [318, 'V1-9 Foreuse', 0, -6, -10, 1, 0, 0, 0],
    319: [319, 'V1-9 Bus suspendu', 0, -3, 0, 1, 0, 0, 0],
    320: [320, 'V1-9 Pont suspendu', 0, 0, 0, 1, 0, 0, 0],
    321: [321, 'V1-9 Blahiti Ouest', 0, 3, 0, 1, 0, 0, 0],
    322: [322, 'V1-9 Squat Blahiti', 0, 3, -10, 1, 0, 0, 0],
    323: [323, 'V1-9 Village Blahiti', 0, 6, 0, 1, 0, 0, 0],
    324: [324, 'V1-9 Créateurs Blahiti', 0, 6, -10, 1, 0, 0, 0],
    325: [325, 'V1-9 Blahiti Welcome', 0, 9, -10, 1, 0, 0, 0],
    326: [326, 'V1-9 Plongeoir', 0, 12, -10, 1, 0, 0, 0],
    327: [327, 'V1-9 Phare', 0, 15, -10, 1, 0, 0, 0],
    328: [328, 'V1-9 Sous-marin', 0, 15, -20, 1, 0, 0, 0],
    329: [329, 'V1-9 Fond océan', 0, 15, -30, 1, 0, 0, 0],
    333: [333, 'Musée - V1.9', 0, -9, 10, 1, 0, 0, 0],
    330: [330, 'Musée - Hall B', 0, -9, 10, 1, 0, 0, 0],
    331: [331, 'Musée - N100', 0, -9, 10, 1, 0, 0, 0],
    332: [332, 'Musée - N200', 0, -12, 10, 1, 0, 0, 0],
    334: [334, 'Musée - N300', 0, -15, 10, 1, 0, 0, 0],
    185: [185, '"Coco Center" Entrée', 0, 24, -10, 1, 0, 0, 0, 255],
    186: [186, '"Coco Center" Tour', 0, 24, 0, 1, 0, 0, 0, 255],
    187: [187, '"Coco Center" Luxe', 0, 24, 10, 1, 0, 0, 0, 255],
    188: [188, 'Ciel', 0, 30, 0, 1, 0, 0, 0, 255],
    189: [189, 'Ciel', 0, 30, 10, 1, 0, 0, 0, 255],
    190: [190, 'Blahiti Plage', 0, 30, -10, 1, 0, 0, 0, 255],
    336: [336, 'Chasseur de Fantôme 1', 0, 0, 0, 1, 3, 0, 0],
    337: [337, 'Chasseur de Fantôme 1', 0, 0, 0, 1, 3, 0, 0],
    338: [338, 'Chasseur de Fantôme 1', 0, 0, 0, 1, 3, 0, 0],
    339: [339, 'N300', 0, 0, 0, 1, 3, 0, 2],
    340: [340, 'N300 Transition', 0, 0, 0, 1, 3, 0, 0],
    341: [341, 'Irwish Grenier Secret', 0, -15, 20, 1, 0, 0, 0, 252],
    342: [342, 'Irwish WC Garçon', 0, -27, 0, 1, 0, 0, 0, 252],
    343: [343, 'Irwish Entrée WC', 0, -24, 0, 1, 0, 0, 0, 252],
    344: [344, 'Irwish WC Fille', 0, -21, 0, 1, 0, 0, 0, 252],
    345: [345, 'Irwish 1er étage', 0, -24, 10, 1, 0, 0, 0, 252],
    346: [346, 'Irwish Scène', 0, -21, 10, 1, 0, 0, 0, 252],
    347: [347, 'Irwish Tables', 0, -18, 10, 1, 0, 0, 0, 252],
    348: [348, 'Irwish Cheminée Magique', 0, -15, 10, 1, 3, 0, 0, 252],
    349: [349, 'Irwish Gardiens', 0, -24, 0, 1, 0, 0, 0, 252],
    350: [350, 'Irwish Entrée', 0, -21, 0, 1, 0, 0, 0, 252],
    351: [351, 'Irwish Bar', 0, -18, 0, 1, 0, 0, 0, 252],
    352: [352, 'Irwish Flèchettes', 0, -15, 0, 1, 3, 0, 0, 252],
    353: [353, 'Irwish Cave 1', 0, -24, -10, 1, 0, 0, 0, 252],
    354: [354, 'Irwish Cave 2', 0, -21, -10, 1, 0, 0, 0, 252],
    193: [193, 'Pyramide', 0, 27, -10, 1, 0, 0, 0, 255],
    192: [192, 'Ciel', 0, 27, 10, 1, 0, 0, 0, 255],
    191: [191, 'Ciel', 0, 27, 0, 1, 0, 0, 0, 255],
    443: [443, 'Entrée Zone 52', 0, -33, -30, 1, 0, 0, 0, 251],
    444: [444, 'Couloir Z52', 0, -30, -30, 1, 0, 0, 0, 251],
    445: [445, 'Fusée Z52', 0, -27, -30, 1, 0, 0, 0, 251],
    400: [400, 'Mer 1', 0, 0, 0, 1, 0, 0, 1, 446],
    401: [401, 'Phare', 0, 3, 0, 1, 0, 0, 1, 446],
    402: [402, 'Plateforme géante', 0, 6, 0, 1, 0, 0, 1, 446],
    403: [403, 'Petits socles', 0, 9, 0, 1, 0, 0, 1, 446],
    404: [404, 'Massif', 0, 12, 0, 1, 0, 0, 1, 446],
    405: [405, 'Monstre de roche', 0, 15, 0, 1, 0, 0, 1, 446],
    406: [406, 'Arbre de roche', 0, 18, 0, 1, 0, 0, 1, 446],
    407: [407, 'Forêt 1', 0, 21, 0, 1, 0, 0, 1, 446],
    408: [408, 'Accueil', 0, 24, 0, 1, 0, 0, 1, 446],
    409: [409, 'Forêt 2', 0, 27, 0, 1, 0, 0, 1, 446],
    410: [410, 'Arbre solitaire', 0, 30, 0, 1, 0, 0, 1, 446],
    411: [411, 'Désert 1', 0, 33, 0, 1, 0, 0, 1, 446],
    412: [412, 'Désert 2', 0, 36, 0, 1, 0, 0, 1, 446],
    413: [413, 'Sentinelle', 0, 39, 0, 1, 0, 0, 1, 446],
    414: [414, 'Mer 2', 0, 42, 0, 1, 0, 0, 1, 446],
    415: [415, 'Quartier général', 0, 45, 0, 1, 0, 0, 1, 446],
    416: [416, 'Mer 3', 0, 48, 0, 1, 0, 0, 1, 446],
    417: [417, 'Ciel', 0, 0, 10, 1, 0, 0, 1, 446],
    418: [418, 'Ciel', 0, 3, 10, 1, 0, 0, 1, 446],
    419: [419, 'Ciel', 0, 6, 10, 1, 0, 0, 1, 446],
    420: [420, 'Ciel', 0, 9, 10, 1, 0, 0, 1, 446],
    421: [421, 'Ciel', 0, 12, 10, 1, 0, 0, 1, 446],
    422: [422, 'Ciel', 0, 15, 10, 1, 0, 0, 1, 446],
    423: [423, 'Ciel', 0, 18, 10, 1, 0, 0, 1, 446],
    424: [424, 'Ciel', 0, 21, 10, 1, 0, 0, 1, 446],
    425: [425, 'Ciel', 0, 24, 10, 1, 0, 0, 1, 446],
    426: [426, 'Ciel', 0, 27, 10, 1, 0, 0, 1, 446],
    427: [427, 'Ciel', 0, 30, 10, 1, 0, 0, 1, 446],
    428: [428, 'Ciel', 0, 33, 10, 1, 0, 0, 1, 446],
    429: [429, 'Ciel', 0, 36, 10, 1, 0, 0, 1, 446],
    430: [430, 'Ciel', 0, 39, 10, 1, 0, 0, 1, 446],
    431: [431, 'Ciel', 0, 42, 10, 1, 0, 0, 1, 446],
    432: [432, 'Ciel', 0, 45, 10, 1, 0, 0, 1, 446],
    433: [433, 'Ciel', 0, 48, 10, 1, 0, 0, 1, 446],
    434: [434, 'Aquatique 1', 0, 0, -10, 1, 0, 0, 1, 446],
    435: [435, 'Aquatique 2', 0, 3, -10, 1, 0, 0, 1, 446],
    436: [436, 'Aquatique 3', 0, 9, -10, 1, 0, 0, 1, 446],
    437: [437, 'Aquatique 4', 0, 12, -10, 1, 0, 0, 1, 446],
    438: [438, 'Aquatique 5', 0, 15, -10, 1, 0, 0, 1, 446],
    439: [439, 'Aquatique 6', 0, 39, -10, 1, 0, 0, 1, 446],
    440: [440, 'Aquatique 7', 0, 42, -10, 1, 0, 0, 1, 446],
    441: [441, 'Aquatique 8', 0, 45, -10, 1, 0, 0, 1, 446],
    442: [442, 'Aquatique 9', 0, 48, -10, 1, 0, 0, 1, 446],
    446: [446, 'Paradis', 0, 0, 20, 1, 0, 0, 1, 446],
    355: [355, 'Fusée', 0, 0, 0, 1, 3, 0, 0],
    447: [447, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    448: [448, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    449: [449, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    450: [450, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    451: [451, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    452: [452, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    453: [453, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    454: [454, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    455: [455, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    456: [456, 'Pyramide', 0, 27, -10, 1, 3, 1, 0],
    457: [457, 'Chalet', 0, 0, 0, 1, 0, 0, 0],
    458: [458, 'Igloo', 0, 0, 0, 1, 0, 0, 0],
    472: [472, 'Tipi', 0, 0, 0, 1, 0, 0, 0],
    465: [465, 'Ciel', 0, 39, 10, 1, 0, 0, 0, 256],
    460: [460, 'Ciel', 0, 39, 0, 1, 0, 0, 0, 256],
    466: [466, 'Ciel', 0, 45, 10, 1, 0, 0, 0],
    467: [467, 'Ciel', 0, 45, 0, 1, 0, 0, 0],
    469: [469, 'Ciel', 0, -57, 0, 1, 0, 0, 0, 264],
    468: [468, 'Ciel', 0, -57, 10, 1, 0, 0, 0, 264],
    461: [461, 'Île Tortue', 0, 39, -10, 1, 3, 0, 0, 256],
    462: [462, 'Tortue', 0, 39, -20, 1, 0, 0, 0, 256],
    463: [463, 'Sirène', 0, 39, -30, 1, 0, 0, 0, 256],
    464: [464, 'Couloir des profondeurs', 0, 39, -40, 1, 0, 0, 0, 256],
    115: [115, "Ponton de l'infini", 0, 45, -10, 1, 0, 0, 0, 264],
    116: [116, "Racine de l'infini", 0, -57, -10, 1, 0, 0, 0, 264],
    470: [470, 'N400', 0, 0, 0, 1, 0, 0, 0],
    335: [335, 'Musée - N400', 0, -18, 10, 1, 0, 0, 0],
    471: [471, 'Musée - Pr Orogandas', 0, -21, 10, 1, 0, 0, 0],
    459: [459, 'Saint Valentin', 0, 0, 0, 1, 0, 0, 0],
    473: [473, 'Van', 0, 0, 0, 1, 0, 0, 0],
    474: [474, 'Ciel', 0, 0, 20, 1, 0, 0, 0],
    475: [475, 'Ciel', 0, 0, 10, 1, 0, 0, 0],
    476: [476, 'Ciel', 0, 3, 10, 1, 0, 0, 0],
    477: [477, 'Ciel', 0, 6, 10, 1, 0, 0, 0],
    478: [478, 'Ciel', 0, 6, 20, 1, 0, 0, 0],
    481: [481, 'Ciel', 0, -51, 10, 1, 0, 0, 0],
    479: [479, 'Tour Céleste 5', 0, 3, 20, 1, 0, 0, 0],
    480: [480, "Portes d'Horia", 0, 3, 20, 1, 0, 0, 0],
    482: [482, 'Ciel', 0, -51, 0, 1, 0, 0, 0, 264],
    483: [483, 'Cabane', 0, -51, -10, 1, 0, 0, 0, 264],
    484: [484, 'Ciel', 0, -48, 10, 1, 0, 0, 0, 264],
    485: [485, 'Ciel', 0, -48, 0, 1, 0, 0, 0, 264],
    486: [486, 'Manoir', 0, -48, -10, 1, 0, 0, 0, 264],
    487: [487, 'Ciel', 0, -45, 10, 1, 0, 0, 0, 264],
    488: [488, 'Ciel', 0, -45, 0, 1, 0, 0, 0, 264],
    489: [489, 'Cimetière', 0, -45, -10, 1, 0, 0, 0, 264],
    490: [490, 'Vestibule Manoir', 0, -48, -10, 1, 3, 2, 0, 264],
    491: [491, 'Chariot', 0, -48, -10, 1, 3, 2, 0],
    492: [492, 'Chariot', 0, -48, -10, 1, 3, 2, 0],
    493: [493, 'Chariot', 0, -48, -10, 1, 3, 2, 0],
    494: [494, 'Chariot', 0, -48, -10, 1, 3, 2, 0],
    495: [495, 'Chariot', 0, -48, -10, 1, 3, 2, 0],
    496: [496, 'Chariot', 0, -48, -10, 1, 3, 2, 0],
    497: [497, "Maison Pain d'épices", 0, 0, 0, 1, 0, 0, 0],
    498: [498, 'Photomaton Noël', 0, 0, 0, 1, 0, 0, 0],
    502: [502, 'Ciel', 0, -54, 10, 1, 0, 0, 0, 264],
    500: [500, 'Ciel', 0, -54, 0, 1, 0, 0, 0, 264],
    501: [501, 'Donjon', 0, -54, -10, 1, 3, 0, 0, 264],
    503: [503, 'Maison Cabane 1', 0, 0, 0, 1, 0, 0, 0],
    504: [504, 'Maison Cabane 2', 0, 0, 0, 1, 0, 0, 0],
    505: [505, 'Maison Cabane 3', 0, 0, 0, 1, 0, 0, 0],
    506: [506, 'Maison Cabane 4', 0, 0, 0, 1, 0, 0, 0],
    507: [507, 'Maison Plage', 0, 0, 0, 1, 0, 0, 0],
    508: [508, 'Saloon', 0, 6, -10, 1, 0, 0, 0, 254],
    509: [509, 'Far West', 0, 9, -10, 1, 0, 0, 0, 254],
    510: [510, 'Arche de pierre', 0, 12, -10, 1, 0, 0, 0, 254],
    511: [511, 'Ciel', 0, 12, 0, 1, 0, 0, 0],
    512: [512, 'Ciel', 0, 9, 0, 1, 0, 0, 0],
    513: [513, 'Ciel', 0, 6, 0, 1, 0, 0, 0],
    514: [514, 'Désert perdu', 0, 9, -10, 1, 3, 0, 0, 254],
    515: [514, 'Désert perdu', 0, 9, -10, 1, 3, 0, 0, 254],
    516: [516, 'Ciel', 0, 9, 0, 1, 3, 0, 0],
    517: [516, 'Ciel', 0, 9, 0, 1, 3, 0, 0],
    518: [518, 'Maison Bosquet', 0, 0, 0, 1, 0, 0, 0],
    519: [519, 'Corridor Manoir', 0, -42, -10, 1, 0, 0, 0, 264],
    521: [521, 'Pince Spooky', 0, -45, -10, 1, 3, 0, 0, 264],
    520: [520, 'Cour Manoir', 0, -45, -10, 1, 0, 0, 0, 264],
    522: [522, 'Le flotteur', 0, -72, -10, 3, 0, 0, 0, 264],
    523: [523, 'La caverne de glace', 0, -69, -10, 3, 0, 0, 0, 264],
    524: [524, 'Le lac gelé', 0, -66, -10, 3, 0, 0, 0, 264],
    525: [525, 'Iceberg', 0, -63, -10, 3, 0, 0, 0, 264],
    526: [526, 'Eaux froides', 0, -60, -10, 3, 0, 0, 0, 264],
    527: [527, 'Ciel', 0, -72, 0, 3, 0, 0, 0, 264],
    528: [528, 'Le pic à glace', 0, -69, 0, 3, 0, 0, 0, 264],
    529: [529, 'Solitude', 0, -66, 0, 3, 0, 0, 0, 264],
    530: [530, 'Banquise', 0, -63, 0, 3, 0, 0, 0, 264],
    531: [531, 'Ciel', 0, -60, 0, 3, 0, 0, 0, 264],
    532: [532, 'Ciel', 0, -72, 10, 3, 0, 0, 0, 264],
    533: [533, 'Ciel', 0, -69, 10, 3, 0, 0, 0, 264],
    534: [534, 'Ciel', 0, -66, 10, 3, 0, 0, 0, 264],
    535: [535, 'Ciel', 0, -63, 10, 3, 0, 0, 0, 264],
    536: [536, 'Ciel', 0, -60, 10, 3, 0, 0, 0, 264],
    537: [537, 'Maison Boule de Neige', 0, 0, 0, 1, 0, 0, 0],
    538: [538, 'Maison Boule de Neige 2', 0, 0, 0, 1, 0, 0, 0],
    539: [539, 'Maison NML', 0, 0, 0, 1, 0, 0, 0]
};

module.exports = maps;