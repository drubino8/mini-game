const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Behaviors.Bullet,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetFlipped,
		C3.Behaviors.Platform.Acts.SetGravity
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{BlockBottom: 0},
	{Platform: 0},
	{Player: 0},
	{Touch: 0},
	{Keyboard: 0},
	{DistanceDisplay: 0},
	{Background: 0},
	{StartAlbum: 0},
	{NoManaText: 0},
	{RunnerText: 0},
	{Sword: 0},
	{StartButton: 0},
	{Audio: 0},
	{Bullet: 0},
	{Lyrics: 0},
	{TiledBackground: 0},
	{BlockTop: 0}
];

self.InstanceType = {
	BlockBottom: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	DistanceDisplay: class extends self.ITextInstance {},
	Background: class extends self.ITiledBackgroundInstance {},
	StartAlbum: class extends self.ISpriteInstance {},
	NoManaText: class extends self.ISpriteInstance {},
	RunnerText: class extends self.ITextInstance {},
	Sword: class extends self.ISpriteInstance {},
	StartButton: class extends self.IButtonInstance {},
	Audio: class extends self.IInstance {},
	Lyrics: class extends self.ITextInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	BlockTop: class extends self.ITiledBackgroundInstance {}
}